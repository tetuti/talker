# Speak up! :microphone:

A rather simple Gatsby site I made in order to learn more about:

- The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- Sourcing a Gatsby site form [Contentful](https://www.contentful.com/), with a focus on splitting published and unpublished content into separate deploys.

The "production" branch of the site can be found [here](https://pedantic-mahavira-fc2eb3.netlify.com/), and the "staging" branch [here].(https://staging--pedantic-mahavira-fc2eb3.netlify.com/)

The general idea was to figure a way for Content Managers to preview the effects of content changes in a separate branch before publishing and thus triggering a redeployment of the site. Most of the magic happens in Netlify and Contentful with separate web-hooks deploying to separate branches with context specific build parameters and tokens.
