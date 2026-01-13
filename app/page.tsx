import GettingStarted from './components/GettingStarted';
import {DashboardCards} from './components/DashboardCards';
import UpcomingPickups from './components/UpcomingPickups';

export default function DashboardPage() {
  return (
    <>
      <GettingStarted />
      <DashboardCards />
      <UpcomingPickups />
    </>
  );
}
