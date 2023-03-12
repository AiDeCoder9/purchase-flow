import Button from '@/components/inputs/Button';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log('error', _);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="h-100 mx-auto">
          <div>
            <div className="ml-5">
              <h1 className="fw-bold">Something went wrong</h1>
              <h2 className="mt-3 text-gray-56">Something went wrong</h2>
              <Button
                className="btn btn-primary mt-4"
                onClick={() => {
                  window.location.reload();
                }}>
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
