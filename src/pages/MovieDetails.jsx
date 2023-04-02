// import { Suspense } from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import {MovieCard} from '../components/MovieCard/MovieCard'

// export const MovieDetails = () => {
//   return (
//     <main>
//       <Suspense>
//         <button>Go back</button>
//         <MovieCard />
//         <div>
//           <Link
//             to={'/movies/:movieId/cast'}
//             // state={{ from: location }}
//           >
//             Cast
//           </Link>
//           <Link
//             to={'/movies/:movieId/reviews'}
//             // state={{ from: location }}
//           >
//             Reviews
//           </Link>
//         </div>
//       </Suspense>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </main>
//   );
// };
