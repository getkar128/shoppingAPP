const Rating = ({ rating, review }) => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
                {Array.from({ length: rating }, (_, index) => (
                    <img key={index} src='https://ik.imagekit.io/238r9emirjj/Post%20Payment/Star.png?updatedAt=1704375792364' alt='' className='w-4 h-4' />
                ))}
                {Array.from({ length: (rating >= 4 && rating < 5) ? 1 : 0 }, (_, index) => (
                    <img key={index} src='https://ik.imagekit.io/238r9emirjj/Post%20Payment/Star%20(2).png?updatedAt=1704520939066' alt='' className='w-4 h-4' />
                ))}
            </div>
            <p className="text-secondary-text">{review} Ratings</p>
        </div>
    )
}

export default Rating