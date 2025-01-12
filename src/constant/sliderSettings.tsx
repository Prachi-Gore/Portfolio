  // slick slider setting
 export const sliderSettings =(data:any[])=>{
  return  {
    // dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow:data?.length>=3?3:data?.length,
    slidesToScroll: data?.length>3?3:1,
    rows: data?.length>3?2:1,
    className: "center",
        centerPadding: "10px",
    // adaptiveHeight: true,
      // centerMode: data?.length===1,
      // variableWidth: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: data?.length>2?2:1,
          infinite: false,
          // dots: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }
 }