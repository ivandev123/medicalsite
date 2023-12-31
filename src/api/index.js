import axios from 'axios'

const BASE_URL = 'http://158.160.18.123:8081/api' // позже будет в .env // dev with openserver
// const BASE_URL = 'http://158.160.18.123:8081/api' // позже будет в .env // prod


///////////GET
export async function getServices(page) {
  return await getAsync(`/services?page=${page}`);
}

export async function getServiceById(id) {
  return await getAsync(`/services/${id}`);
}

export async function getCategories() {
  return await getAsync('/category');
}

export async function getCategoryById(id) {
  return await getAsync(`/category/${id}`);
}

export async function getSubcategories() {
  return await getAsync('/subcategory');
}

export async function getSubcategoryById(id) {
  return await getAsync(`/subcategory/${id}`);
}

export async function getReviews() {
  return await getAsync('/reviews');
}

export async function getTextReviews(page) {
  return await getAsync(`/text-reviews?page=${page}`);
}

export async function getVideoReviews(page) {
  return await getAsync(`/video-reviews?page=${page}`);
}

export async function getCertificates() {
  return await getAsync('/certificates');
}

export async function getSpecialists() {
  return await getAsync('/specialists');
}

export async function getBlogArticles(page) {
  return await getAsync(`/blog?page=${page}`);
}

export async function getBlogArticle(blogArticleId) {
  return await getAsync(`/blog/${blogArticleId}`)
}

export async function getBlogArticleCommentsById(blogArticleId) {
  return await getAsync(`/comments/${blogArticleId}`)
}

export async function getStocks(page) {
  return await getAsync(`/stocks?page=${page}`)
}

export async function getStock(id) {
  return await getAsync(`/stocks/${id}`)
}

export async function getAdvantages() {
  return await getAsync('/ouradvantages')
}

export async function getHowItWork() {
  return await getAsync('/howitwork')
}

export async function getAdditionalServices() {
  return await getAsync('/additionalservices')
}

export async function getAppeal() {
  return await getAsync('/appeal')
}

export async function getVideoLectures(page) {
  return await getAsync(`/video?page=${page}`)
}

export async function getMassMediaAboutUs() {
  return await getAsync('/media')
}

export async function getPhotoGallery() {
  return await getAsync('/gallery')
}

export async function getChambersInOurClinic() {
  return await getAsync('/chambers')
}

export async function getRegulatoryBodies() {
  return await getAsync('/controlbody')
}

export async function getPolicy() {
  return await getAsync('/policy')
}

export async function getTerms() {
  return await getAsync('/terms')
}

export async function getInformationSchedule() {
  return await getAsync('/information-chart')
}

export async function getInformationOrganizations() {
  return await getAsync('/information-organizations')
}

export async function getInformation() {
  return await getAsync('/information')
}

export async function getContacts() {
  return await getAsync('/contact')
}

export async function getRegions() {
  return await getAsync('/region')
}

export async function getSeo() {
  return await getAsync('/seo')
}

//////////POST
export async function makeAnAppointment(form) {
  return await postAsync('/feedback', form)
}

export async function addBlogArticleComment(comment) {
  return await postAsync('/comments', comment)
}

///////////PUT

//////////////

export async function deleteAsync(url, checkError = true) {
  const config = {
    headers: {
      // "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.delete(BASE_URL + url, config)

    if (response.status === 200) {
      return response.data
    }
    if (response.status === 204 || response.status === 201) {
      return true
    }
  } catch (error) {
    if (checkError && error.response) {
      return error.response
    }
    console.error(error)
  }
}
export async function putOrPatchAsync(url, data, checkError = true, method = 'put') {
  const config = {
    headers: {
      // "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response;
    switch (method) {
      case 'put':
        response = await axios.put(BASE_URL + url, data, config)
        break;
      case 'patch':
        response = await axios.patch(BASE_URL + url, data, config)
    }

    if (response.status === 200) {
      return response.data
    }
    if (response.status === 204 || response.status === 201) {
      return true
    }
  } catch (error) {
    if (checkError && error.response) {
      return error.response
    }
    console.error(error)
  }
}

export async function postAsync(url, data, checkError = true) {

  const config = {
    headers: {
      // "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.post(BASE_URL + url, data, config)

    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    if (response.status === 204) {
      return true
    }
  } catch (error) {
    if (checkError && error.response) {
      return error.response
    }
    console.error(error)
  }

  return undefined
}


export async function getAsync(url) {
  const config = {
    headers: {
      // "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.get(BASE_URL + url, config)
    if (response.status === 200) {
      return response.data
    }
    if (response.status === 302) {
      return response.headers
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token')
      return error?.response
    }
    console.error(error)
  }
}
