import legoBlocks from "../assets/stock-photos/caleb-woods-ecRuhwPIW7c-unsplash.jpg";
import toyBlocks from "../assets/stock-photos/ana-klipper-t4B_JcUofvY-unsplash.jpg";
import eating from "../assets/stock-photos/harry-grout-ivfmiQ5FbHw-unsplash.jpg";

const Services = () => {
  return (
    <div className="services-content">
      <h1 className="title">Our Services</h1>
      <div className="services">
        <div>
          <h3 className="services-secondary-one">
            Thrive offers speech and language therapy, feeding therapy,
            occupational therapy, and teletherapy to the pediatric population
          </h3>
        </div>
        <section>
          <div>
            <h3 className="services-secondary">
              What is Speech and Language Therapy?
            </h3>
            <div className="speech-therapy">
              <img
                src={toyBlocks}
                alt="Child Playing With Toy Blocks"
                width="400"
              />
              <p className="services-paragraph">
                Speech and language therapy sessions are individualized sessions
                that actively engage your child towards meeting goals set and
                agreed upon in the child's initial evaluation. Activities are
                chosen to be engaging and tailored to your child's interest and
                learning. Speech and language therapy may address a wide range
                of skills including:
              </p>
              <ul>
                <li>Social use of language or pragmatic language skills</li>
                <li>Fluency or stuttering</li>
                <li>Apraxia of speech</li>
                <li>Phonological and phonemic awareness</li>
                <li>Problem solving</li>
                <li>Inferencing</li>
                <li>Perspective taking</li>
                <li>Vocabulary</li>
              </ul>
              <ul style={{ marginTop: "-1rem" }}>
                <li>Grammar</li>
                <li>Syntax</li>
                <li>Auditory processing</li>
                <li>Reading comprehension</li>
                <li>Understanding linguistic concepts and directions</li>
                <li>Speech sound production</li>
                <li>Augmentative and alternative communication (AAC)</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="services-secondary">
              What is Occupational Therapy?
            </h3>
            <div className="occupational-therapy">
              <p className="services-paragraph">
                Pediatric occupational therapy helps children develop their
                independence while strengthening development of fine motor
                skills, sensory motor skills, and visual motor skills for
                function and socialization. Therapeutic activities work
                specifically on developmental tasks. Activities may include
                handwriting, cutting with scissors, tying shoes, play skills,
                brushing teeth, dressing, hand-eye coordination and other fine
                motor skills. Occupational therapists also assess and address
                sensory integration (the ability of the brain to take in
                sensations). Occupational therapists will work with the child
                and their family to understand how the child processes sensory
                stimuli including visual, tactile, smell, movement, and
                proprioception so that the brain and body function optimally.
              </p>
              <img
                src={legoBlocks}
                alt="Child Playing With Legos"
                width="400"
              />
            </div>
          </div>
          <h3 className="services-secondary">What is Feeding Therapy?</h3>
          <div className="feeding">
            <div className="feeding-therapy">
              <img
                src={eating}
                alt="Child Eating Spaghetti Noodles"
                width="300"
              />
              <div>
                <p className="services-paragraph feeding-therapy-paragraph">
                  Feeding therapy sessions target feeding goals recommended and
                  agreed upon following the child's initial evaluation.
                </p>
                <h3>Does my child have a pediatric feeding disorder?</h3>
                <ul>
                  <li>Limited repertoire of foods</li>
                  <li>Anxiety around new foods</li>
                  <li>Negative mealtime behaviors</li>
                  <li>Difficulty moving/chewing food in the mouth</li>
                  <li>Frequently overstuffing mouth</li>
                  <li>Extended mealtimes (30+ minutes)</li>
                  <li>Gagging or vomiting</li>
                  <li>Poor weight gain</li>
                  <li>Poor endurance</li>
                  <li>Coughing/choking during feeding</li>
                  <li>Difficulty accepting solids at 6-7 months</li>
                  <li>Difficulty progressing in textures</li>
                  <li>
                    Unable to drink from an open cup or straw by 12-18 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
