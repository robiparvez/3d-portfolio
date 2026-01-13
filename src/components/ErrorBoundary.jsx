import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('3D Component Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex-center w-full h-full min-h-[400px] bg-black-200 rounded-xl p-10'>
                    <div className='text-center'>
                        <p className='text-white-50 mb-4'>Unable to load 3D content</p>
                        <p className='text-sm text-white-50/50'>Try refreshing the page</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
