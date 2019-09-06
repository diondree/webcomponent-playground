import { storiesOf } from '@storybook/polymer';

const stories = storiesOf('CTA Buttons', module);
stories.add(
  'Default',
  () =>
    `<cta-button
    button-text="Play"
  ></cta-button>`
);

stories.add(
  'With Blue Background',
  () =>
    `<cta-button
    button-text="Play"
    color="blue"
  ></cta-button>`
);

stories.add(
  'With White Text',
  () =>
    `<cta-button
    button-text="Play"
    color="blue"
    text-color="white"
  ></cta-button>`
);

stories.add(
  'With Image',
  () => `<cta-button
        button-text="Play"
        color="blue"
        text-color="white"
        image-url="https://www.freepnglogos.com/uploads/google-play-png-logo/store-app-store-google-google-play-logo-play-png-logo-symbol-17.png"
        ></cta-button>`
);
