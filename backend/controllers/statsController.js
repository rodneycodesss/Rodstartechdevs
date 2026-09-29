import mongoose from 'mongoose'
import { ApplicationModel } from '../models/Application.js'
import { PaymentModel } from '../models/Payment.js'
import { OpportunityModel } from '../models/Opportunity.js'

export async function getStats(req, res) {
  try {
    if (mongoose.connection.readyState === 1) {
      const totalApplicants = await ApplicationModel.countDocuments() || 0
      const paidApplicants = await ApplicationModel.countDocuments({ paymentStatus: 'Paid' }) || 0
      const inTraining = await ApplicationModel.countDocuments({ networkStatus: 'Training Active' }) || 0
      const activeOpportunities = await OpportunityModel.countDocuments({ status: 'Open' }) || 0

      const revenueAgg = await PaymentModel.aggregate([
        { $match: { status: 'Paid' } },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ])
      const totalRevenueKsh = revenueAgg[0]?.total || (paidApplicants * 1500)

      return res.json({
        success: true,
        data: {
          totalApplicants,
          paidApplicants,
          inTraining,
          activeOpportunities,
          totalRevenueKsh,
          payheroAccount: '12463',
          systemStatus: 'Operational'
        }
      })
    }

    return res.json({
      success: true,
      data: {
        totalApplicants: 1,
        paidApplicants: 1,
        inTraining: 1,
        activeOpportunities: 3,
        totalRevenueKsh: 1500,
        payheroAccount: '12463',
        systemStatus: 'Fallback Operational'
      }
    })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}
