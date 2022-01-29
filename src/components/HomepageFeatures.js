import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    tag: (
      <>
        Create
      </>
    )
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    tag: (
      <>
        Build
      </>
    )
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    tag: (
      <>
        Enjoy
      </>
    )
  },
  {
    title: 'Less to Learn',
    Svg: require('../../static/img/undraw_accept_tasks_re_09mv.svg').default,
    description: (
      <>
        You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.
      </>
    ),
    tag: (
      <>
        Enjoy
      </>
    )
  },
  {
    title: 'Only One Dependency',
    Svg: require('../../static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together seamlessly – no complicated version mismatches.
      </>
    ),
    tag: (
      <>
        Enjoy
      </>
    )
  },
  {
    title: 'No Lock-In',
    Svg: require('../../static/img/undraw_firmware_re_fgdy.svg').default,
    description: (
      <>
        Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.
      </>
    ),
    tag: (
      <>
        Enjoy
      </>
    )
  },
];

function Feature({Svg, title, description, tag}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* <h4>{tag}</h4> */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
