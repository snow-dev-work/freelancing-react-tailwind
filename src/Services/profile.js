import API from './API'
import { toast } from 'react-toast'
import { encryptPassword } from '../Utils/Validation'
import axios from 'axios'
import AbstractService from './Abstract'

class ProfileService extends AbstractService {
    constructor() {
        super()
    }

    getUid() {
        return this.uid
    }

    async getUserProfile() {
        const id = this.getUid()
        try {
            const data = API.get('/user/profile/all');
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }
    }

    async saveProfile(payload) {
        try {
            const data = API.post('/user/profile/profile', {
                profile: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }
    }

    async saveContact(payload) {
        try {
            const data = API.post('/user/profile/contact', {
                contact: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }
    }

    async saveSkills(payload) {
        try {
            const data = API.post('/user/profile/skills', {
                skills: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }
    }

    async saveExperience(payload) {
        try {
            const data = API.post('/user/profile/experience', {
                experience: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }
    }

    async saveEducation(payload) {
        try {
            const data = API.post('/user/profile/education', {
                education: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }

    }

    async saveQualification(payload) {
        try {
            const data = API.post('/user/profile/qualification', {
                qualification: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }

    }

    async savePublication(payload) {
        try {
            const data = API.post('/user/profile/publication', {
                publication: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }

    }

    async saveLanguage(payload) {
        try {
            const data = API.post('/user/profile/language', {
                language: payload,
            });
            return data;
        } catch (error) {
            console.error(err)
            toast.error(err.response.data.messages[0].message)
        }

    }

}

export default new ProfileService()
