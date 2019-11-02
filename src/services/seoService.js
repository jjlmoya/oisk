export default class SeoService {
  constructor({
                title = '',
                description,
                image,
                isAmp = false,
                richData = []
              }) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.isAmp = isAmp;
    this.language = 'es';
    this.richData = this.getRichData(richData);
  }

  getRichData(richData) {
    return richData.map((data) => {
      data['@context'] = 'http://schema.org';
      return {
        vmid: 'ldjson-schema',
        innerHTML: JSON.stringify(data),
        type:
          'application/ld+json'
      }
    })
  }

  getMetas() {
    return {
      title: this.title,
      description: this.description,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {rel: 'favicon', href: '/icons/muchoviaje.png'},
        {'property': 'og:description', 'content': this.description, 'vmid': 'og:description'},
        {'property': 'og:image', 'content': this.image, 'vmid': 'og:image'},
        {'property': 'og:title', 'content': this.title, 'vmid': 'og:title'},
      ],
      script: [].concat(this.richData),
      htmlAttrs: {
        lang: this.language,
        amp: this.isAmp
      }
    }
  }

}
