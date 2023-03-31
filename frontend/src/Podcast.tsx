import styles from './blah.module.css';

function Podcast(props: any) {
  return (
    <div>
      <div className="row">
        <div className="align-self-center">
          <h1 className={styles.h1}>
            Check out this super
            <a href="https://baconsale.com/" target="blank">
              {' '}
              cool podcast
            </a>
            !
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
