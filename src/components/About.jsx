import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
      });
      
  return (
    <div className="text-white max-w-[1200px] mx-auto mt-10 py-6 text-center md:mt-30 md:py-0" id="about">
        
        <h2 className="mb-10 text-4xl font-bold primary-color pt-28" data-aos="flip-left" >About Me</h2>

        <p className="text-base lg:text-xl" data-aos="zoom-in" data-aos-delay="400">
          I’m Ishara Stanley, a dedicated software engineering undergraduate at
          The Open University of Sri Lanka. With a strong foundation in mobile
          and web development, I am passionate about building innovative
          solutions that solve real-world problems. My technical expertise
          includes Java, React Native, Firebase, and SQL, alongside experience
          in frameworks like React JS and Tailwind CSS. I’m a quick learner,
          self-motivated, and enjoy working collaboratively in teams. Currently,
          I am seeking an internship to apply my academic knowledge and further
          enhance my skills in software development, contributing to impactful
          projects in the ever-evolving tech industry.
        </p>

        <h3 className="my-8 text-2xl underline primary-color" data-aos="fade-right">Education</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis in id ratione? Nobis, ipsum quo? Accusamus, consequuntur! Ipsa at et, nemo dignissimos repellat quos dolore asperiores, tenetur similique quasi quod sint tempore hic fugiat quis laboriosam commodi soluta qui sit tempora optio non error. Natus distinctio quasi aliquid voluptatum quia voluptate deleniti consequuntur, officia vitae, quae voluptatibus optio inventore accusantium vero repudiandae praesentium, explicabo temporibus dolor. Qui consequatur enim culpa, blanditiis distinctio unde suscipit quis at rem amet ullam excepturi ipsum perferendis vero quaerat, expedita tenetur ipsa sint dolor iure ex aliquam iste aspernatur repellendus. Vel quibusdam, a sit atque fugit veniam quam molestiae tenetur beatae facere iure dolorum eveniet dolorem fuga ab. Eligendi sunt, et totam aliquam sint dolor aperiam non quod, alias corporis quae repudiandae neque. Recusandae ad, eos fugit quam magnam, sapiente placeat deserunt ullam corrupti consectetur nam delectus repellat iste quasi nesciunt cum odit! Ipsum quidem alias quae blanditiis dignissimos doloremque ullam at, omnis asperiores libero amet error saepe earum provident sint tempore quod illo consectetur dolores autem? Temporibus voluptatibus facere ex quisquam inventore fuga sunt quas labore aperiam. Labore rem asperiores culpa placeat id error reiciendis maxime eveniet, nobis obcaecati magnam repellat cupiditate delectus.</p>
        
    </div>
  )
}

export default About
