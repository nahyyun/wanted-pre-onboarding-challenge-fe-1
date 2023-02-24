import React from "react";
import axiosInstance from "../api/index";
import { useEffect, useReducer } from "react";

type Todo = {
  title: string;
  content: string;
  id: string;
};

interface IReducerState {
  isLoading: boolean;
  responseData: any;
  error: string;
}

type responseData = Todo[] | Todo | null;

const defaultFetchReducer: IReducerState = {
  isLoading: false,
  responseData: [],
  error: "",
};

enum ActionType {
  LOADING = "Loading",
  FETCHED = "Fetched",
  ERROR = "Error",
}

enum MethodType {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

type Action<T> =
  | { type: "Loading" }
  | { type: "Fetched"; payload: T }
  | { type: "Error"; payload: Error };

const fetchReducer = <T>(state: T, action: Action<T>): T => {
  switch (action.type) {
    case ActionType.LOADING: {
      return { ...state, isLoading: true };
    }
    case ActionType.FETCHED: {
      return {
        ...state,
        isLoading: false,
        responseData: action.payload,
      };
    }
    case ActionType.ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

const useAsync = <T>(
  url: string,
  immediate: boolean
): {
  isLoading: boolean;
  responseData: T;
  error: string;
  POST: (url: string, data: object) => Promise<T>;
  PUT: (url: string, data: object) => Promise<T>;
  DELETE: (url: string) => Promise<T>;
} => {
  const [state, dispatch] = useReducer(fetchReducer, defaultFetchReducer) as [
    IReducerState,
    React.Dispatch<any>
  ];

  async function API(url: string, method: string, data?: object): Promise<any> {
    try {
      dispatch({ type: ActionType.LOADING });

      const { data: response } = await axiosInstance({ url, method, data });

      dispatch({ type: ActionType.FETCHED, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionType.ERROR, payload: error as Error });
    }
  }

  const GET = () => API(url, MethodType.GET);
  const POST = (url: string, data: object) => API(url, MethodType.POST, data);
  const PUT = (url: string, data: object) => API(url, MethodType.PUT, data);
  const DELETE = (url: string) => API(url, MethodType.DELETE);

  useEffect(() => {
    if (!immediate) return;

    GET();
  }, []);

  return { ...state, POST, PUT, DELETE };
};

export default useAsync;
