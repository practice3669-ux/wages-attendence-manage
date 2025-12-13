import mongoose from 'mongoose'

const AttendanceSchema = new mongoose.Schema({
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true }, // present, absent, half-day
  hoursWorked: { type: Number, default: 8 },
  notes: { type: String }
})

export default mongoose.models.Attendance || mongoose.model('Attendance', AttendanceSchema)