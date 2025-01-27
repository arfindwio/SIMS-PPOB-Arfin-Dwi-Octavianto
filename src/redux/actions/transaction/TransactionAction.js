// Services
import {
  reduxGetBalance,
  reduxPostTopUp,
  reduxPostTransaction,
  reduxGetHistoryTransaction,
} from "../../../services/transaction/TransactionService";

// Reducer
import {
  setBalance,
  setTransaction,
  setHistory,
  startLoading,
  endLoading,
} from "../../reducer/transaction/TransactionSlice";

// Error Handler
import { handleRequestError } from "../../../utils/errorHandler";

export const getBalanceAction = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const result = await reduxGetBalance();
    dispatch(setBalance(result.data.data.balance));
    return true;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const postTopUpAction = (input) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const result = await reduxPostTopUp(input);
    dispatch(setBalance(result.data.data.balance));
    return result.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const postTransactionAction = (input) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const result = await reduxPostTransaction(input);
    const currentState = getState();
    dispatch(
      setBalance(
        currentState.transaction.balance - result.data.data.total_amount,
      ),
    );

    return result.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const getHistoryTransactionAction =
  (query) => async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      const result = await reduxGetHistoryTransaction(query);

      const currentState = getState();

      if (query.includes("offset=0")) {
        dispatch(setHistory(result.data.data));
      } else {
        dispatch(
          setHistory({
            records: [
              ...currentState.transaction.history.records,
              ...result.data.data.records,
            ],
            offset: result.data.data.offset,
            limit: result.data.data.limit,
          }),
        );
      }

      return result.data.data.records.length;
    } catch (err) {
      if (err.response) {
        if (err.response.status >= 400 && err.response.status <= 500) {
          console.error(err.response.data.message);
        } else {
          console.error("unexpected Error", err);
        }
      }
    } finally {
      dispatch(endLoading());
    }
  };
