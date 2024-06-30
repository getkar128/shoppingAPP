import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shipping = () => {
    return (
        <div className="">
            <h2 className="h1-bold">Shipping</h2>
            <div className="flex justify-between text-secondary-text mt-4">
                <div className="flex gap-2 items-center">
                    <div className="size-12 grid place-items-center bg-dark-2 rounded-lg">
                        <FontAwesomeIcon icon={faTruck} className="text-xl" />
                    </div>
                    <div>
                        <h4 className="font-medium">Standard</h4>
                        <p className="text-sm text-secondary-text">Arrives 6-8 business days after processing</p>
                    </div>
                </div>
                <p>₹0.00</p>
            </div>
        </div>
    )
}

export default Shipping