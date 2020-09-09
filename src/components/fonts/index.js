import quicksandBold from './Quicksand-Bold.ttf';
import quicksandLight from './Quicksand-Light.ttf';
import quicksandMedium from './Quicksand-Medium.ttf';
import quicksandRegular from './Quicksand-Regular.ttf';
import quicksandSemiBold from './Quicksand-SemiBold.ttf';

const fontBook = {
  quicksandBold: [
    {
      src: quicksandBold,
    },
  ],
  quicksandLight: [
    {
      src: quicksandLight,
    },
  ],
  quicksandMedium: [
    {
      src: quicksandMedium,
    },
  ],
  quicksandRegular: [
    {
      src: quicksandRegular,
    },
  ],
  quicksandSemiBold: [
    {
      src: quicksandSemiBold,
    },
  ],
};

export default Object.keys(fontBook)
  .filter((name) => fontBook[name])
  .map((name) =>
    fontBook[name]
      .map(
        (font) => `
      @font-face {
        font-family: '${name}';
        src: url('${font.src}');
      }
    `
      )
      .join('')
  )
  .join('');
