import { faviconSVG } from '@/assets/images';

export default function AppLogo() {
    return (
        <>
            <img src={faviconSVG} className='h-full object-contain' alt="" />
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate text-sidebar-primary leading-none font-semibold">Exam Mentor</span>
            </div>
        </>
    );
}
