import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const Calendar = () => {
    return (
        <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateCalendar
                    onChange={() => {}}
                />
            </LocalizationProvider>
        </div>
    )
}