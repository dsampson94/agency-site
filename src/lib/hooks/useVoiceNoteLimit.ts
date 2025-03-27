import { useMemo } from 'react'

const MAX_NOTES = 3
const COOLDOWN_DAYS = 7

export function useVoiceNoteLimit(enquiries: { createdAt: string | Date }[] = []) {
    return useMemo(() => {
        const now = new Date()
        const cutoff = new Date(now.getTime() - COOLDOWN_DAYS * 24 * 60 * 60 * 1000)

        const recentEnquiries = enquiries.filter((enquiry) => {
            const created = new Date(enquiry.createdAt)
            return created > cutoff
        })

        const exceeded = recentEnquiries.length >= MAX_NOTES

        let nextAvailableDate: Date | undefined = undefined

        if (exceeded) {
            const oldestRecent = recentEnquiries
                .map((e) => new Date(e.createdAt))
                .sort((a, b) => a.getTime() - b.getTime())[0]

            nextAvailableDate = new Date(
                oldestRecent.getTime() + COOLDOWN_DAYS * 24 * 60 * 60 * 1000
            )
        }

        return {
            exceeded,
            remaining: Math.max(0, MAX_NOTES - recentEnquiries.length),
            nextAvailableDate,
        }
    }, [enquiries])
}
