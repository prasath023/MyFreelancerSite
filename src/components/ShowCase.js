import React, { useEffect, useState } from 'react'
import "../css/ShowCase.css"
import webDev from "../assets/webDev.png"
import webDesigning from "../assets/webDesigning.png"
import googleAds from "../assets/googleAds.png"
import SEO from "../assets/SEO.png"
import SMM from "../assets/SMM.png"
import contentWriting from "../assets/contentWriting.png"
import digitalMarketing from "../assets/digitalMarketing.png"
import webAnalytics from "../assets/webAnalytics.png"

const ShowCase = ({handleAddToCart}) => {
    const [requirements, setRequirements]=useState([])
    useEffect(() => {
        handleAddToCart(requirements)
    }, [requirements])
    
    const data=[
        {
            id:1,
            title:'Website Design',
            img:`${webDesigning}`,
            description:"We design and develop websites that will help you grow. WordPress, PHP, eCommerce… we cover everything. Our experienced team create websites that are user friendly, conversion optimized and customer-centric. From simple to complex, small to big, informative to e commerce we cover it all."
        },
        {
            id:2,
            title:'Website Development',
            img:`${webDev}`,
            description:"We give life to your ideas by creating user friendly iOS & Android Apps. We use new age mobile technologies to build smart, feature-centric, scalable, user friendly and beautiful looking Apps. We develop mobile Apps that help businesses grow, develop better operational efficiency and engagement."
        },
        {
            id:3,
            title:'Digital Marketing ',
            img:`${digitalMarketing}`,
            description:"We provide complete Digital Marketing Solution that will create identity, build brands, increase traffic which will lead to more sale. We will ensure your presence on multiple channels relevant to your business, generate new leads, drive more visitors to your website and help them convert."
        },
        {
            id:4,
            img:`${SMM}`,
            title:'Social Media Marketing',
            description:"It's a Social Media world and we help you keep pace with this ever changing world. We will create impactful social media campaigns to attract audience and help you in fulfilling your business objectives. We focus on growing your followers base, creating brand awareness, digital presence and increasing conversions."
        },
        {
            id:5,
            img:`${SEO}`,
            title:'SEO ',
            description:"SEO is the most important marketing channel to reach the online audience. We will help you increase your visibility in search engines like Google and Bing, ensure your website is optimized for local and mobile searches too which will lead to increase in organic traffic and organic ranking."
        },
        {
            id:6,
            img:`${googleAds}`,
            title:'Google Ads ',
            description:"We will optimize Google Ad campaigns around popular keywords and topics to generate quality leads and maximize conversions. Our focus lies on increasing leads and sales, whether you have just launched a new site or need to increase traffic-you will start getting more calls, enquiries and sale as soon as the ads go live."
        },
        // {
        //     id:7,
        //     img:`${webDev}`,
        //     title:'Email Marketing ',
        //     description:"We will create personalized email campaigns with attractive subject line, strong design, valuable content and solid call to action which will enable you to connect with valuable customers, prospects, people who are interested in your products. We will ensure that emailers are sent to the right people based on factors like demographics, location, past activities, website behaviour etc "
        // },
        {
            id:8,
            img:`${webAnalytics}`,
            title:'Web Analytics ',
            description:"We will ensure you make data-driven business decisions regarding the markets you serve, the products you offer or the segments you should focus on based on digital analytics- analysis of website traffic data. We will help you unearth all your queries like who are your website visitors, from where are they coming, what information are they looking for, when do they make purchase etc. "
        },
        {
            id:9,
            img:`${contentWriting}`,
            title:'Content Writing ',
            description:"We will create unique content for your business which will be worth sharing on various platforms to ensure consistent engagement with target audience. We will use content to share your idea, improve organic search results and promote your business. High quality content will always be created, curated and shared on regular basis as per Content Calendar to serve the need of your customers. "
        },
    ]

    const handleAdd=(title)=>{
         setRequirements([...requirements,title])
    }

  return (
    <div className='flex flex-col justify-center items-center mt-16 lg:mt-20 '>
      <h1 className='text-2xl lg:text-3xl font-bold underline-offset-8 mb-7 lg:mb-16 underline'>Services we offer</h1>
      <div className=' flex flex-wrap justify-center items-center'>
        {
        data.map(
            (info)=>
                <div className='mb-24 w-80 bg-transparent perspective cursor-pointer mx-5 my-5 h-80 lg:h-96 group'>
                  <div className='backface-hidden  relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                    <div className='absolute card1 px-6 w-80 h-full'>
                    
                        
                        <div className='w-full flex justify-center items-center pb-3 pt-8'>
                           <img className='h-56' src={info.img} alt="webDevelopment" />
                           </div>
                           <div className='text-lg text-center lg:text-xl font-bold '>
                            {info.title}
                        </div>
                    
                    </div>
                    <div className='flex backface-hidden justify-between items-center flex-col absolute card2 my-rotate-y-180  w-full h-full'>
                        <div className='h-40 flex flex-col justify-start items-center'>
                        {/* <div className='flex text-center justify-center w-80 text-xl text-black font-bold'>
                            {info.title}
                        </div> */}
                        <div className='w-full pt-10 px-7 text-sm h-full'>
                            {info.description}
                        </div>
                        <div onClick={()=>handleAdd(info.title)} className='lg:mt-36 mt-32 py-1 px-4  text-white font-semibold bg-black rounded-sm  ease-in-out duration-500 transition-colors'>ADD</div>
                        </div>
                    </div>
                  </div>
                </div>
            
        )
        }
    </div>
    </div>
   
  )
}

export default ShowCase