## Mocks

On peut _mocker_ des modules tiers :

    // api.test.js
    import * as api from './api'

    jest.mock('axios', () => ({
      get: async path => ({ status: 200, data: { ok: true } })
    })

    it('should be ok', async () => {
      expect(await api.getStatus()).toEqual(true)
    })

    // api.js
    import axios from 'axios'

    export const getStatus = async () => {
      const response = await axios.get('/status')
      return response.data.ok
    }

