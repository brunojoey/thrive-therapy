import christinaPhoto from "../assets/owner-files/IMG_1809.jpg";
import alyssaPhoto from "../assets/owner-files/IMG_3320.jpg";
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
              <h2>Alyssa Williams M.S. CCC-SLP</h2>
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
              <h2>Christina Bruno M.S. CCC-SLP</h2>
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
      </div>
    </div>
  );
};

export default About;
