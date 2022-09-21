import React, { Component, ErrorInfo } from 'react';
import ErrorStack from './ErrorStack';

interface Props {
  catchErrors: 'always' | 'dev' | 'prod' | 'never';
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * This component handles whenever the user encounters a JS error in the
 * app. It follows the "error boundary" pattern in React. We're using a
 * class component because according to the documentation, only class
 * components can be error boundaries.
 *
 * Read more here:
 *
 * @link: https://reactjs.org/docs/error-boundaries.html
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  // To avoid unnecessary re-renders
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>
  ): boolean {
    return nextState.error !== nextProps.error;
  }

  // If an error in a child is encountered, this will run
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error reporting service here
    // This is a great place to put BugSnag, Sentry, Honeybadger, etc:
    // reportErrorToCrashReportingService(error)
  }

  // Reset the error back to null
  resetError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  // Only enable if we're catching errors in the right environment
  isEnabled(): boolean {
    const { catchErrors } = this.props;

    switch (catchErrors) {
      case 'always':
        return true;
      case 'dev':
        return Boolean(__DEV__);
      case 'prod':
        return Boolean(!__DEV__);
      default:
        return false;
    }
  }

  // Render an error UI if there's an error; otherwise, render children
  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    const hasError = this.isEnabled() && error;

    if (!hasError) {
      return children;
    }

    return (
      <ErrorStack
        onReset={this.resetError}
        error={error}
        errorInfo={errorInfo}
      />
    );
  }
}

export default ErrorBoundary;
