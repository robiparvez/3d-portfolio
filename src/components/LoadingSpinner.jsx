const LoadingSpinner = () => {
    return (
        <div className='flex-center w-full h-screen'>
            <div className='flex flex-col items-center gap-4'>
                <div className='w-16 h-16 border-4 border-white-50 border-t-white rounded-full animate-spin' />
                <p className='text-white-50'>Loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
