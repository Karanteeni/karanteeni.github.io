import { parseISO, format } from 'date-fns'
import fiFI from 'date-fns/locale/fi'

export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy', { locale: fiFI })}</time>
}
