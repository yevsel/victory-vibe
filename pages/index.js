import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '@/components/Modal'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [showModal,setShowModal] = useState(false)
  const [modalData,setModalData]=useState({})
  
  const blogs = [
    {
      id:1,
      title:"Fueling Your Performance: The Power of Proper Sports Nutrition",
      intro:"When it comes to excelling in sports, physical training alone isn't enough. A well-balanced and carefully planned diet plays a crucial role in maximizing your performance and achieving peak results. In this blog, we'll explore the essential components of a sports nutrition plan that can enhance your endurance, strength, and overall athletic abilities.",
      body:[
        "In sports nutrition, macronutrients - carbohydrates, proteins, and fats - form the foundation of a balanced diet. Carbohydrates are your body's primary source of energy, while proteins aid in muscle repair and growth. Fats provide long-lasting energy and support vital bodily functions. Striking the right balance of these macros is essential to fuel your workouts and promote optimal recovery.",
        "Pre and post-workout nutrition can significantly impact your performance and recovery. Consuming a carbohydrate-rich meal before exercise provides the energy needed for intense training sessions. Following a workout, a combination of protein and carbohydrates aids in muscle repair and replenishes glycogen stores. Don't forget the importance of hydration - drink plenty of water before, during, and after your workouts to stay properly hydrated.",
        "Hydration is often underestimated but is critical for peak performance. Dehydration can lead to reduced endurance, impaired cognitive function, and increased risk of injury. Keep a water bottle handy during workouts, and for intense activities or longer durations, consider sports drinks that provide electrolytes to replenish lost minerals."
      ]
    },
    {
      id:2,
      title:"Eating Smart: Unlocking Your Full Potential with Sports Nutrition",
      intro:"As an athlete, your body is your most valuable asset. To unlock your full potential and achieve peak performance, it's essential to nourish it with the right fuel. In this blog, we'll explore the principles of smart sports nutrition and how it can optimize your training, improve recovery, and take your game to new heights.",
      body:[
        "Proteins are the superheroes of sports nutrition, as they play a key role in muscle repair and growth. Incorporate high-quality protein sources such as lean meats, poultry, fish, eggs, legumes, and dairy into your meals to support your training efforts. For added convenience, consider protein shakes or bars as quick post-workout options.",
        "Carbohydrates are your body's primary energy source, making them essential for optimal athletic performance. Focus on complex carbohydrates like whole grains, fruits, and vegetables, which provide sustained energy and maintain stable blood sugar levels. Carbs are particularly vital before endurance events to ensure you have enough fuel to power through.",
        "Don't fear fats; they are crucial for sports performance. Healthy fats like avocados, nuts, seeds, and olive oil provide a concentrated source of energy and support hormone production. Incorporate them into your diet to maintain steady energy levels and support overall health."
      ]
    },
    {
      id:3,
      title:"Stay Fit, Stay Strong: The Key Benefits of Regular Gym Workouts",
      intro:"In today's fast-paced world, maintaining a healthy lifestyle is more important than ever. One of the most effective ways to achieve this is through regular gym workouts. In this blog, we will explore the numerous benefits of hitting the gym regularly and how it can empower you to stay fit, strong, and lead a fulfilling life.",
      body:[
        "Regular gym workouts offer a diverse range of exercises, from cardiovascular activities like running and cycling to strength training with weights. Engaging in these workouts consistently helps build endurance, increase muscle strength, and improve overall physical fitness. As your body adapts and grows stronger, everyday tasks become easier, and you'll notice increased energy levels throughout the day.",
        "For those aiming to shed excess weight, the gym becomes a powerful ally. Cardio exercises, combined with resistance training, aid in burning calories, boosting metabolism, and promoting fat loss. Additionally, strength training helps build lean muscle mass, contributing to a toned and sculpted physique. Achieving weight management goals not only enhances physical health but also boosts self-confidence and body positivity.",
        "The gym offers a haven from life's daily stresses. Physical activity triggers the release of endorphins, the body's natural mood lifters, reducing stress and anxiety. It provides a much-needed opportunity to unplug from screens and distractions, allowing you to focus solely on your workout and clear your mind."
      ]
    },
    {
      id:4,
      title:"Motivation for the Gym: Finding Your Drive to Stay Active",
      intro:"Finding the motivation to hit the gym regularly can sometimes be a challenge. However, staying active and maintaining a fitness routine is essential for a healthy and balanced lifestyle. In this blog, we'll explore effective strategies to boost your motivation, helping you stay committed to your gym workouts and make fitness a lifelong habit.",
      body:[
        "Begin your fitness journey by setting clear and achievable goals. Whether it's improving endurance, building muscle, or losing weight, having specific targets provides a sense of direction and purpose. Break these goals into smaller milestones, celebrating each accomplishment along the way.",
        "Working out with a friend or finding a gym buddy can make exercising enjoyable and hold you accountable. Having someone to share your fitness journey with creates a supportive environment, and you can motivate each other to stay on track and push beyond your limits.",
        "Monotony can lead to a lack of motivation. Keep your workouts exciting by incorporating a variety of exercises and classes. Try out different machines, join group fitness sessions, or explore outdoor activities like hiking or cycling. A diverse routine ensures you remain engaged and excited to exercise regularly."
      ]
    }
  ]

  return (
      <main>
        <Head>
          <title>Victory Vibe</title>
        </Head>
        
        <div className='w-4/5 mx-auto'>
          <div className='hero my-10'>
            <h3 className='text-center text-xl'>Unleash Your <span>Sport Spirit</span></h3>
          </div>
          
          <div className='mt-20 pb-20'>
            <div className='each-slate space-x-10'>
              
              <div>
                <h2>Fueling Your Performance: The Power of Proper Sports Nutrition</h2>
                <p className='my-10'>When it comes to excelling in sports, physical training alone is not enough. A well-balanced and carefully planned diet plays a crucial role in maximizing your performance and achieving peak results. In this blog, we will explore the essential components of a sports nutrition plan that can enhance your endurance, strength, and overall athletic abilities.</p>
                <button
                  onClick={()=>{
                    setShowModal(true)
                    setModalData(blogs[0])
                  }}
                >Read More</button>
              </div>
              <div>
                <Image src={image1}/>
              </div>
            </div>
            <div className='each-slate space-x-10'>
              <div>
                <Image src={image2}/>
              </div>
              <div>
                <h2>Eating Smart: Unlocking Your Full Potential with Sports Nutrition</h2>
                <p className='my-10'>As an athlete, your body is your most valuable asset. To unlock your full potential and achieve peak performance, it is essential to nourish it with the right fuel. In this blog, we will explore the principles of smart sports nutrition and how it can optimize your training, improve recovery, and take your game to new heights.</p>
                <button onClick={()=>{
                    setShowModal(true)
                    setModalData(blogs[1])
                  }}>Read More</button>
              </div>
            </div>
            <div className='each-slate space-x-10'>
              
              <div>
                <h2>Stay Fit, Stay Strong: The Key Benefits of Regular Gym Workouts</h2>
                <p className='my-10'>In todays fast-paced world, maintaining a healthy lifestyle is more important than ever. One of the most effective ways to achieve this is through regular gym workouts. In this blog, we will explore the numerous benefits of hitting the gym regularly and how it can empower you to stay fit, strong, and lead a fulfilling life.</p>
                <button onClick={()=>{
                    setShowModal(true)
                    setModalData(blogs[2])
                  }}>Read More</button>
              </div>
              <div>
                <Image src={image3}/>
              </div>
            </div>
            <div className='each-slate space-x-10'>
              <div>
                <Image src={image4}/>
              </div>
              <div>
                <h2>Motivation for the Gym: Finding Your Drive to Stay Active</h2>
                <p className='my-10'>Finding the motivation to hit the gym regularly can sometimes be a challenge. However, staying active and maintaining a fitness routine is essential for a healthy and balanced lifestyle. In this blog, we will explore effective strategies to boost your motivation, helping you stay committed to your gym workouts and make fitness a lifelong habit.</p>
                <button onClick={()=>{
                    setShowModal(true)
                    setModalData(blogs[3])
                  }}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        {showModal&&<Modal modalData={modalData} setShowModal={setShowModal}/>}
      </main>
  )
}
