// import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import image1 from '../image/img1.png'

// const Home = () => {
//   return (
//     <div>
//       <Box sx={{ backgroundColor: '#f4f4f4', py: 6 }}>
//       <Container>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
//             <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
//               <Box
//                 component="span"
//                 sx={{
//                   color: 'white',
//                   fontWeight: 'bold',
//                   display: 'inline-block',
//                   backgroundColor: 'primary.main',
//                   p: 1,
//                   borderRadius: 2,
//                   transform: 'rotate(-8deg)',
//                   position: { xs: 'relative', md: 'absolute' },
//                   top: { xs: '30px', md: '-24px' },
//                   left: { xs: '11px', md: '45px' },
//                   mb: { xs: 2, md: 0 },
//                 }}
//               >
//                 #1 Bulk
//               </Box>
//             </Typography>
//             <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
//               WhatsApp
//             </Typography>
//             <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
//               Marketing Tool &
//             </Typography>
//             <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
//               More
//             </Typography>
//             <Typography variant="body1">
//               Unlock the full potential of the world's most popular
//             </Typography>
//             <Typography variant="body1">
//               messaging platform with our premium features, including
//             </Typography>
//             <Typography variant="body1">
//               bulk messaging, chatbot support, autoresponders, and
//             </Typography>
//             <Typography variant="body1">
//               much more!
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//   <Box
//     component="img"
//     src={image1}
//     alt="Marketing Team"
//     sx={{ width: '500px', borderRadius: 2, transform: 'rotate(0deg)' }}
//   />
//   <Box sx={{ display: 'flex', flexDirection: 'column', mt: -5, position: 'relative' }}>
//     <Button
//       variant="contained"
//       sx={{
//         backgroundColor: 'white',
//         color: 'black',
//         position: 'absolute',
//         zIndex: 1,
//         bottom: '170px',
//         transform: 'rotate(-5deg)',
//       }}
//     >
//       Easy use
//     </Button>
//     <Button
//       variant="contained"
//       sx={{
//         backgroundColor: 'primary.main',
//         color: 'white',
//         position: 'absolute',
//         zIndex: 1,
//         bottom: '120px',
//         transform: 'rotate(5deg)',
//       }}
//     >
//       Powerful
//     </Button>
//   </Box>
// </Grid>
//         </Grid>
//       </Container>
//     </Box>
//     </div>
//   );
// };

// export default Home;

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../image/img1.png";

const Home = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#f4f4f4", py: 6 }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    display: "inline-block",
                    backgroundColor: "primary.main",
                    p: 1,
                    borderRadius: 2,
                    transform: "rotate(-8deg)",
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: "30px", md: "-24px" },
                    left: { xs: "-11px", md: "45px" },
                    mb: { xs: 2, md: 0 },
                  }}
                >
                  #1 Bulk
                </Box>
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                WhatsApp
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Marketing Tool &
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                More
              </Typography>
              <Typography variant="body1">
                Unlock the full potential of the world's most popular
              </Typography>
              <Typography variant="body1">
                messaging platform with our premium features, including
              </Typography>
              <Typography variant="body1">
                bulk messaging, chatbot support, autoresponders, and
              </Typography>
              <Typography variant="body1">much more!</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                // width:'fit-content',
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={image1}
                  alt="Marketing Team"
                  sx={{
                    width: { xs: "250px", md: "500px" },
                    borderRadius: 2,
                    transform: "rotate(0deg)",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Box
                  sx={{
                    // position: "relative",

                    position: "absolute",
                    // top: "50%",
                    bottom: { xs: "70px", md: "130px" },
                    left: { xs: "-50px", md: "40px" },
                    // left: "10%",
                    mt: { xs: -5, md: -4 },
                    
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      // position: "absolute",
                      marginBottom:'15px',
                      zIndex: 1,
                      // bottom: { xs: "70px", md: "130px" },
                      // right: { xs: "220px", md: "360px" },
                      transform: {
                        xs: "rotate(-5deg)",
                        md: "translateX(-50%) rotate(-5deg)",
                      },
                      width: { xs: "90px", md: "auto" },
                    }}
                  >
                    Easyuse
                  </Button>
                  
                  <Button
                    variant="contained"
                    sx={{
                      
                      backgroundColor: "primary.main",
                      color: "white",
                      // position: "absolute",
                      zIndex: 1,
                      
                      // bottom: { xs: "20px", md: "80px" },
                      // right: { xs: "220px", md: "340px" },
                      transform: {
                        xs: "rotate(5deg)",
                        md: "translateX(-50%) rotate(5deg)",
                      },
                      width: { xs: "90px", md: "auto" },
                    }}
                  >
                    Powerful
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
