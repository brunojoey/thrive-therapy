import christinaPhoto from "../assets/owner-files/IMG_1809.jpg";
import alyssaPhoto from "../assets/owner-files/IMG_6337.jpg";
import jordanPhoto from "../assets/owner-files/IMG_4068.jpg";
import maggiePhoto from "../assets/owner-files/Headshot.PNG";
import kayleePhoto from "../assets/owner-files/2022-11-13_01-34-31_030.jpeg"
import arianaPhoto from "../assets/owner-files/IMG_2299.jpg"
import drawing from "../assets/stock-photos/erika-fletcher-YfNWGrQI3a4-unsplash.jpg"

const About = () => {
  return (
    <div className="content">
      <div className="about">
        <div className="about-titles">
          <h1 className="about-title">About Thrive Pediatric Therapy</h1>
          <h2 className="about-secondary">
            We believe in each child and their ability to thrive
          </h2>
        </div>
        <section className="about-section">
          <div className="about-section-image">
            <img src={drawing} alt="Child Drawing on a Piece of Paper" width="500" />
          </div>
          <p className="about-paragraph">
            At Thrive Pediatric Therapy our mission is to provide quality speech
            and language therapy, feeding therapy, and occupational therapy
            services to the pediatric population. We are dedicated to helping
            children and families thrive together by celebrating individual
            differences, unique strengths, and empowering every child to thrive
            in their specific developmental goals. Thrive Pediatric Therapy
            prides itself on a collaborative approach to ensure families are
            supported by establishing a relationship with children and families
            and utilizing an engaging, holistic, and fun approach.
          </p>
        </section>
        <h2 className="about-owners-title">The Owners</h2>
        <section className="about-owners">
          <div className="about-owners-alyssa">
            <div className="about-owners-alyssa-div">
              <h3>Meet Alyssa!</h3>
              <img src={alyssaPhoto} alt="Alyssa Williams" width="250" />
            </div>
            <div>
              <h2>Alyssa Williams | M.S. CCC-SLP</h2>
              <p className="owners-paragraph">
                Alyssa is dedicated to providing individualized and engaging
                therapy while having fun and building a relationship with each
                child. She looks forward to partnering with children and their
                parents for a holistic approach to speech therapy, language
                therapy, and feeding therapy. She strives to provide the highest
                quality, evidence-based clinical practices for each child, while
                guiding parents to feel successful in their roles as a team
                member and communication partner for their child. Alyssa
                graduated from Purdue University where she earned both her
                Bachelor's degree and Master's degree in speech-language
                pathology with highest distinction. She has always held a
                passion for children and partnering with families to help their
                child reach their potential. Alyssa has experience working as a
                speech-language pathologist in the school setting with preschool
                to high school age students as well as in the private practice
                setting. In addition, Alyssa has experience working with
                communication across the lifespan in acute care and inpatient
                rehab settings. She has experience with a variety of therapy
                including autism, stuttering, speech sound disorders,
                literacy, apraxia of speech, receptive-expressive language
                disorders and delays, down syndrome, early intervention for
                speech and language delays, feeding difficulties, dysphagia, and
                use of augmentative and alternative communication (AAC). Alyssa
                is trained and certified in natural language acquisition as well
                as assessing and diagnosing autism. She received significant
                training through Western Psychological Services on
                administration and scoring of the Autism Diagnostic Observation
                Schedule™, Second Edition (ADOS-2) assessment. Alyssa and her
                husband enjoy spending time with their friends and family, being
                outdoors, playing with their dog, traveling, and trying new
                restaurants.
              </p>
            </div>
          </div>
          <div className="about-owners-christina">
            <div>
              <h2>Christina Bruno | M.S. CCC-SLP</h2>
              <p>
                Christina grew up in the Sumner county area where several
                members of her family still reside. Christina has a heart for
                the community and believes it's important to serve the community
                that means so much to her. Christina has experience in the
                private practice setting, elementary, and high school
                setting, as well as skilled nursing and rehab facilities.
                She earned her Bachelor's degree in communication disorders from
                Western Kentucky University and Master's Degree in speech
                pathology from Tennessee State University. She has experience
                working with diverse populations including birth, toddlers,
                school-aged children, adolescents, and adults. She recognizes
                the importance of connecting with families to support their
                child's communication and believes therapy should not only be
                functional, but also fun. She has experience treating a variety
                of clients including individuals diagnosed with expressive and
                receptive language delays, autism, fluency disorders,
                phonological disorders, childhood apraxia of speech, and down
                syndrome. Christina is trained and certified in assessing and
                diagnosing autism. She received significant training through
                Western Psychological Services on administration and scoring of
                the Autism Diagnostic Observation Schedule™, Second Edition
                (ADOS-2) assessment. She was also in charge of conducting and
                educating families on test results/ diagnosis of Autism.
                Christina enjoys trying new recipes, being outdoors, baking,
                organizing, exploring a new town, spending time with friends and
                family, playing with her Golden Doodle, Riley, and lots of
                coffee.
              </p>
            </div>
            <div className="about-owners-christina-div">
              <h3>Meet Christina!</h3>
              <img src={christinaPhoto} alt="Christina Bruno" width="250" />
            </div>
          </div>
        </section>
        <section className="about-staff">
          <h2>Meet Our Amazing Staff!</h2>
          <div className="about-staff-jordan">
            <div>
              <h3>Occupational Therapist</h3>
              <img src={jordanPhoto} alt="Jordan Sanders" width="250" />
            </div>
            <div>
              <h2>Jordan Sanders | OTR/L</h2>
              <p>
                Jordan graduated from the University of Tennessee Health Science
                Center in 2016 with her Masters in Occupational Therapy. Her
                Master's degree was preceded by a Bachelor's degree in Psychology
                from Cumberland University. She has experience working in
                outpatient pediatrics and in acute care settings. Jordan has a
                passion for working with children of all abilities and fostering
                development in the early years of life. She loves partnering with
                children, their families, and their team to promote meaningful
                participation in their activities of daily life. Jordan enjoys
                incorporating a combination of play-based, holistic,
                evidenced-based, and sensory-based approaches to treatment,
                encouraging children to develop functional skills in everyday
                activities. In her free time she enjoys traveling, trying new
                restaurants, spending time with family, friends, and her dog Ace.
              </p>
            </div>
          </div>
          <div className="about-staff-maggie">
            <div>
              <h2>Maggie Bill | M.S. CCC-SLP </h2>
              <p>
                Maggie grew up in Indiana, but has loved living in Tennessee for the
                last several years. She graduated from Saint Louis University with her
                undergraduate degree and Purdue University with her graduate degree.
                She has experience working in the private practice, preschool, and
                elementary school settings with a diverse range of ages and goals. She
                enjoys working with children with early language delays, receptive
                and expressive language impairments, gestalt language processing,
                autism, augmentative and alternative communication (AAC), speech
                sound disorders, stuttering, and literacy needs. She is passionate
                about building relationships with children and their families,
                using a child-led, play-based approach to therapy, and using
                strengths to help children grow. In her free time, she enjoys hiking,
                baking, traveling, and spending time with friends and family.
              </p>
            </div>
            <div>
              <h3>Speech Language Pathologist</h3>
              <img src={maggiePhoto} alt="Maggie Bill" width="250" />
            </div>
          </div>
          <div className="about-staff-kaylee">
            <div>
              <h3 style={{ margin: ".25rem" }}>Speech Language Pathologist</h3>
              <img src={kayleePhoto} alt="Kaylee Coghill" width="250" />
            </div>
            <div>
              <h2>Kaylee Coghill | M.A. CCC-SLP </h2>
              <p>
                Kaylee feels it is a joy and privilege to help children and their 
                families learn and grow together. Kaylee uses evidence-based treatment 
                approaches that are tailored to each unique child in order to provide 
                functional, fun therapy that has a positive impact on the child and 
                their family. Kaylee specializes in early language development skills 
                and creating positive experiences around meal times with picky eaters. 
                Kaylee completed her Bachelor's degree at Western Kentucky University 
                in 2016 and her Master's degree in Communication Sciences and Disorders 
                at St. Louis University in 2018. Kaylee lives in Hendersonville with her 
                husband, Ethan, an Aussiedoodle named Remi, and is welcoming a baby boy 
                this July. When not at work, Kaylee loves to go on walks, sit on the back 
                patio, have morning coffee, and listen to podcasts. Kaylee looks forward 
                to supporting your child and family!
              </p>
            </div>
          </div>
          <div className="about-staff-ariana">
            <div>
              <h2>Ariana Musolino | COTA</h2>
              <p>
                Ariana graduated from St. Catherine's University in 2019. She grew up 
                in Folsom, California but has been loving Tennessee life since 2020. 
                Her passion for helping others was sparked when she volunteered in the 
                special education classroom in high school, where she was first introduced 
                to occupational therapy. Ariana has experience working in multiple settings, 
                however found her passion in pediatrics. Ariana has a passion for working 
                with children of all abilities and fostering development in the early years 
                of life. Ariana loves partnering with children, their families, and their team 
                to promote meaningful participation in their activities of daily life. 
                In her free time she enjoys traveling, trying new restaurants, cheering 
                on the Volunteers, and spending time with family, friends, and her dog Blu!
              </p>
            </div>
            <div>
              <h3 style={{ margin: ".25rem" }}>COTA (Certified Occupational Therapy Assistant)</h3>
              <img src={arianaPhoto} alt="Ariana Musolino" width="250" />
            </div>
          </div>
          <div className="about-staff-coming-soon">
            <h3>And More Bios Coming Soon!</h3>
            <li>Alicia Kurth | COTA</li>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
