import Works from './Works';
import './Styles.scss'

const Work = () => {
  return (
    <section className="skills section section__margin" id="portifolio">
        <h2 className="section__title">Portifolio</h2>
        <span className="section__subtitle">My works</span>

        <Works />
    </section>
  );
}

export default Work;
