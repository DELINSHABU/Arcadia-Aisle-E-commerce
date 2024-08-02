
function CommentCart({ email, rating, comment }) {
    return (
        <div className="max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md">
           
            <div className="p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                    <span className="text-gray-800 font-medium mr-2">{email}</span>
                    <span className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.977 2.887a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118L10 15.347a1 1 0 00-1.175 0l-3.977 2.887c-.784.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118L.049 9.4c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69L9.049 2.927z" />
                            </svg>
                        ))}
                    </span>
                </div>
                <p className="text-gray-700">{comment}</p>
            </div>
        </div>
    )
}

export default CommentCart