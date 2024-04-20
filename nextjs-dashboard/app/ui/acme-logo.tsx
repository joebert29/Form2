import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`{lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>

      <UserCircleIcon className="text-white-500 h-6 w-6" />
      <p>This is a user circle icon:</p>
    </div>
  );
}
