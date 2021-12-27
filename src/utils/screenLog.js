/* eslint-disable */
export const printANSI = () => {
  // console.clear()
  let text = `\tITLUBBER
 \tPublished ${APP_VERSION}-${GIT_HASH} @ itlubber.art
 \tBuild date: ${BUILD_DATE}`
  console.log(`%c${text}`, 'color: #2639e9')
  console.log('%cThanks for using itlubber!', 'color: #fff; font-size: 14px; font-weight: 300; text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;')
}
