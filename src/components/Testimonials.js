// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';

// const Testimonials = () => {
//   return (
//     <div className="testimonials-section">
//       <h2>What Our Clients Say</h2>
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Text>
//                 "Great service, would recommend!"
//               </Card.Text>
//               <Card.Footer>– John Doe</Card.Footer>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Text>
//                 "Exceeded our expectations!"
//               </Card.Text>
//               <Card.Footer>– Jane Smith</Card.Footer>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Text>
//                 "Exceeded our expectations!"
//               </Card.Text>
//               <Card.Footer>– Jane Smith</Card.Footer>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Testimonials;


// import React, { useState } from 'react';
// import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// // import './Testimonials.css'; // Custom styles for testimonials
// import 'bootstrap/dist/css/bootstrap.min.css';


// const testimonialsData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     review: 'Great service! Highly recommend for electrical work.',
//     rating: 5,
//     time: '1 month ago',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     review: 'Professional and quick response time. Will use again.',
//     rating: 4,
//     time: '2 months ago',
//   },
//   {
//     id: 3,
//     name: 'Mark Wilson',
//     review: 'Very satisfied with the quality of work. Thank you!',
//     rating: 5,
//     time: '3 weeks ago',
//   },
//   {
//     id: 4,
//     name: 'Lucy Brown',
//     review: 'They did a fantastic job with my home lighting.',
//     rating: 4,
//     time: '1 week ago',
//   },
//   {
//     id: 5,
//     name: 'Michael Johnson',
//     review: 'Friendly staff and reliable service.',
//     rating: 5,
//     time: '5 days ago',
//   },
//   // Add more testimonials as needed
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonialsPerPage = 3;

//   const handleNext = () => {
//     if (currentIndex < testimonialsData.length - testimonialsPerPage) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };


//   return (
//     <div className="testimonials-container text-center py-5">
//       <h2>Client Testimonials</h2>
//       <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-button">
//             <FaChevronLeft />
//           </button>
//           <button onClick={handleNext} disabled={currentIndex >= testimonialsData.length - testimonialsPerPage} className="nav-button">
//             <FaChevronRight />
//           </button>
//       <div className="row">
//         {testimonialsData.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial) => (
//           <div key={testimonial.id} className="col-md-4 mb-4">
//             <div className="testimonial-card p-3 border rounded">
//               <div className="testimonial-rating">
//                 {[...Array(5)].map((_, index) => (
//                   <span key={index} className={`star ${index < testimonial.rating ? 'filled' : ''}`}>
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <p className="testimonial-review">{testimonial.review}</p>
//               <p className="testimonial-name">- {testimonial.name}</p>
//               <p className="testimonial-time text-muted">{testimonial.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <div className="navigation-buttons mb-3">
//         <button className="btn btn-primary" onClick={handlePrev} disabled={currentIndex === 0}>
//           &lt; Prev
//         </button>
//         <button className="btn btn-secondary" onClick={handleNext} disabled={currentIndex >= testimonialsData.length - testimonialsPerPage}>
//           Next &gt;
//         </button>
//       </div> */}
//       <a className="google-review-link" href="https://www.google.co.nz/search?q=exotic+electricals&source=hp&ei=470uYo7CB8eB1e8P6oeC2Ag&iflsig=AHkkrS4AAAAAYi7L87FRybNvRdX4LM9PvF_GJb67vAcH&ved=0ahUKEwjOv8vH28T2AhXHQPUHHeqDAIsQ4dUDCAk&uact=5&oq=exotic+electricals&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAWEB46CwguEMcBEK8BEJECOggIABCABBCxAzoLCC4QgAQQsQMQgwE6CwguELEDEMcBEKMCOg4ILhCABBCxAxDHARCjAjoLCC4QsQMQgwEQ1AI6BQgAEJECOgQIABBDOgcIABCxAxBDOggILhCABBDUAjoOCC4QgAQQsQMQxwEQ0QM6CggAELEDEIMBEEM6BQgAEIAEOgoILhDHARCvARBDOgoILhDHARCjAhBDOgsIABCABBCxAxCDAToLCC4QgAQQxwEQ0QM6DggAEI8BEOoCEIwDEOUCOg4ILhCPARDqAhCMAxDlAjoRCC4QjwEQ1AIQ6gIQjAMQ5QI6CAgAELEDEIMBOgsILhCABBCxAxDUAjoLCC4QsQMQxwEQ0QM6BAguEEM6CgguEMcBENEDEEM6CAgAEIAEEMkDUABYqzFgtjZoBnAAeACAAesBiAGOI5IBBjAuOC4xNJgBAKABAbABCg&sclient=gws-wiz" target="_blank" rel="noopener noreferrer">
//         Read your reviews on Google
//       </a>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import './Testimonials.css'; // Custom styles for testimonials

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Great service! Highly recommend for electrical work.',
    rating: 5,
    time: '1 month ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Professional and quick response time. Will use again.',
    rating: 4,
    time: '2 weeks ago',
  },
  {
    id: 3,
    name: 'Mark Wilson',
    review: 'Very satisfied with the quality of work. Thank you!',
    rating: 5,
    time: '4 days ago',
  },
  {
    id: 4,
    name: 'Lucy Brown',
    review: 'They did a fantastic job with my home lighting.',
    rating: 4,
    time: '2 months ago',
  },
  {
    id: 5,
    name: 'Michael Johnson',
    review: 'Friendly staff and reliable service.',
    rating: 5,
    time: '3 days ago',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - testimonialsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials-container">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Client Testimonials</h2>
        <div>
          <FaChevronLeft
            onClick={handlePrev}
            className={`nav-icon ${currentIndex === 0 ? 'disabled' : ''}`}
            disabled={currentIndex === 0}
          />
          <FaChevronRight
            onClick={handleNext}
            className={`nav-icon ${currentIndex >= testimonialsData.length - testimonialsPerPage ? 'disabled' : ''}`}
            disabled={currentIndex >= testimonialsData.length - testimonialsPerPage}
          />
        </div>
      </div>

      <div className="row">
        {testimonialsData
          .slice(currentIndex, currentIndex + testimonialsPerPage)
          .map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 ">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`star ${index < testimonial.rating ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <p className="testimonial-review">{testimonial.review}</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-time">{testimonial.time}</p>
            </div>
          ))}
      </div>
      <a className="google-review-link" href="https://www.google.co.nz/search?q=exotic+electricals&source=hp&ei=470uYo7CB8eB1e8P6oeC2Ag&iflsig=AHkkrS4AAAAAYi7L87FRybNvRdX4LM9PvF_GJb67vAcH&ved=0ahUKEwjOv8vH28T2AhXHQPUHHeqDAIsQ4dUDCAk&uact=5&oq=exotic+electricals&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAWEB46CwguEMcBEK8BEJECOggIABCABBCxAzoLCC4QgAQQsQMQgwE6CwguELEDEMcBEKMCOg4ILhCABBCxAxDHARCjAjoLCC4QsQMQgwEQ1AI6BQgAEJECOgQIABBDOgcIABCxAxBDOggILhCABBDUAjoOCC4QgAQQsQMQxwEQ0QM6CggAELEDEIMBEEM6BQgAEIAEOgoILhDHARCvARBDOgoILhDHARCjAhBDOgsIABCABBCxAxCDAToLCC4QgAQQxwEQ0QM6DggAEI8BEOoCEIwDEOUCOg4ILhCPARDqAhCMAxDlAjoRCC4QjwEQ1AIQ6gIQjAMQ5QI6CAgAELEDEIMBOgsILhCABBCxAxDUAjoLCC4QsQMQxwEQ0QM6BAguEEM6CgguEMcBENEDEEM6CAgAEIAEEMkDUABYqzFgtjZoBnAAeACAAesBiAGOI5IBBjAuOC4xNJgBAKABAbABCg&sclient=gws-wiz" target="_blank" rel="noopener noreferrer">
        Read our reviews on Google
      </a>
    </div>
  );
};

export default Testimonials;


