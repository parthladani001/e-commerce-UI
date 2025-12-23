import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // You could also send this to a remote logging service
    console.error('ErrorBoundary caught:', error, info)
    this.setState({ error, info })
  }

  render() {
    const { error, info } = this.state
    if (error) {
      return (
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <div className="mb-4 text-sm text-muted-foreground">The component threw an error during rendering.</div>
          <details className="whitespace-pre-wrap bg-gray-100 p-4 rounded">
            <summary className="cursor-pointer font-medium">Show error details</summary>
            <pre className="mt-2">{String(error)}</pre>
            {info?.componentStack && (
              <pre className="mt-2 text-xs">{info.componentStack}</pre>
            )}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
