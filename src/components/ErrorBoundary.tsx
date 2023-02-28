import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error!!!!:", error, errorInfo);
  }

  public reset() {
    this.setState({ hasError: false });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>요청을 처리하는 데 실패했습니다. 다시 시도해주세요.</div>
          <button onClick={() => this.reset()}>다시 불러오기</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
