import BookingDetail from "./BookingDetail";

const BookingCard = ({ bookingData, onBack }) => {
    return (    
        <BookingDetail bookingData={bookingData} onBack={onBack} />
    );
}

export default BookingCard;