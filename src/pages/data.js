// const tl = gsap.timeline();

// useEffect(() => {
//   tl.from(".project__intro img", 2, {
//     rotate: "360deg",
//     ease: "bounce.out",
//   }).from(
//     ".project__title",
//     1.3,
//     {
//       opacity: 0,
//       y: 100,
//       ease: "power3.out",
//     },
//     "-=2"
//   );
//   if (!initial) {
//     tl.from(
//       ".project__container .project__card",
//       1.7,
//       {
//         z: "100vw",
//         opacity: 0,
//         ease: "expo.out",
//         stagger: {
//           amount: 0.5,
//         },
//       },
//       "-=1.4"
//     );
//   }

//   initial = true;
// }, [tl]);
