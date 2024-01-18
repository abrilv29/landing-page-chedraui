/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} className="h-4 w-4 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="h-4 w-4 text-yellow-400" />);
    }

    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
