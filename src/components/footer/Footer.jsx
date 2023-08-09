import React from 'react';

import '../utils/footer.css';

import { FaInstagram, FaWhatsapp, FaFacebook, FaCcVisa } from 'react-icons/fa';
import { CONFIGS } from '@/__config';

const Footer = () => {
    return (
        <>
            <section className='custom__footer'>
                <div className='custom__footer__layout'>
                    <div className='custom__footer__container'>

                        <div className='custom__footer__content--box'>
                            <h2 className='custom__footer__box--title'><span>Formas de Pagamento</span></h2>
                            <ul className='custom__footer__box--img'>
                                <li>
                                    <svg viewBox='0 -11 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <rect x='.5' y='.5' width='69' height='47' rx='5.5' fill='#fff' stroke='#D9D9D9'/>
                                        <path fillRule='evenodd' clipRule='evenodd' d='M21.25 32.517h-4.24l-3.18-12.132c-.151-.558-.472-1.052-.943-1.284-1.176-.584-2.473-1.05-3.887-1.284v-.467h6.831c.943 0 1.65.701 1.768 1.516l1.65 8.751 4.239-10.267h4.122l-6.36 15.166Zm8.718 0h-4.005L29.26 17.35h4.005l-3.297 15.166Zm8.479-10.966c.118-.816.825-1.284 1.65-1.284 1.296-.117 2.708.118 3.887.7l.707-3.265A10.138 10.138 0 0 0 41.039 17c-3.887 0-6.715 2.1-6.715 5.017 0 2.218 2.003 3.382 3.418 4.084 1.53.7 2.119 1.166 2.001 1.866 0 1.05-1.178 1.517-2.355 1.517-1.414 0-2.828-.35-4.123-.935l-.707 3.268c1.414.582 2.944.817 4.359.817 4.358.115 7.067-1.984 7.067-5.134 0-3.967-5.537-4.2-5.537-5.949ZM58 32.517 54.82 17.35h-3.416c-.707 0-1.414.467-1.65 1.166l-5.888 14h4.123l.823-2.216h5.065l.472 2.216H58Zm-6.006-11.083 1.176 5.716h-3.298l2.122-5.716Z' fill='#172B85'/>
                                    </svg>
                                </li>
                                <li>
                                    <svg viewBox='0 -11 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <rect x='.5' y='.5' width='69' height='47' rx='5.5' fill='#fff' stroke='#D9D9D9'/>
                                        <path fillRule='evenodd' clipRule='evenodd' d='M35.395 34.762a13.502 13.502 0 0 1-8.853 3.298c-7.537 0-13.648-6.181-13.648-13.806 0-7.625 6.11-13.806 13.648-13.806 3.378 0 6.47 1.242 8.852 3.298a13.502 13.502 0 0 1 8.853-3.298c7.537 0 13.648 6.181 13.648 13.806 0 7.625-6.11 13.806-13.648 13.806-3.378 0-6.47-1.242-8.852-3.298Z' fill='#ED0006'/>
                                        <path fillRule='evenodd' clipRule='evenodd' d='M35.395 34.762a13.841 13.841 0 0 0 4.795-10.508 13.84 13.84 0 0 0-4.795-10.508 13.502 13.502 0 0 1 8.852-3.298c7.537 0 13.648 6.181 13.648 13.806 0 7.625-6.11 13.806-13.648 13.806-3.378 0-6.47-1.242-8.852-3.298Z' fill='#F9A000'/>
                                        <path fillRule='evenodd' clipRule='evenodd' d='M35.395 13.746a13.841 13.841 0 0 1 4.795 10.508c0 4.208-1.861 7.976-4.795 10.508A13.841 13.841 0 0 1 30.6 24.254c0-4.208 1.86-7.976 4.795-10.508Z' fill='#FF5E00'/>
                                    </svg>
                                </li>
                                <li>
                                    <svg viewBox='0 -140 780 780' xmlns='http://www.w3.org/2000/svg'>
                                        <path fill='#FFF' strokeWidth='15' stroke='#000' d='M0 0h780v500H0z'/>
                                        <path d='M166.5 184.95c6.8-2.3 14.1-3.5 21.7-3.5 33.2 0 60.9 23.6 67.2 54.9l47-9.6c-10.8-53.2-57.8-93.3-114.2-93.3-12.9 0-25.3 2.1-36.9 6l15.2 45.5z' fill='#FFF100'/>
                                        <path d='m111 337.35 31.8-36c-14.2-12.6-23.1-30.9-23.1-51.4 0-20.4 8.9-38.8 23.1-51.3l-31.8-35.9c-24.1 21.4-39.3 52.5-39.3 87.3 0 34.7 15.2 65.899 39.3 87.3z' fill='#00A3DF'/>
                                        <path d='M255.4 263.75c-6.4 31.3-34 54.8-67.2 54.8-7.6 0-14.9-1.2-21.8-3.5l-15.2 45.5c11.6 3.899 24.1 6 37 6 56.4 0 103.4-40 114.2-93.2l-47-9.6z' fill='#EE4023'/>
                                        <path d='M459 295.95c-7.799 7.601-18.299 12.2-29.9 12-8-.1-15.398-2.5-21.6-6.5l-15.6 24.801c10.699 6.699 23.199 10.699 36.801 10.899 19.699.3 37.698-7.5 50.8-20.2l-20.501-21zm-28.199-101.1c-39.201-.6-71.6 30.8-72.201 70-.2 14.7 4 28.5 11.5 39.9l128.8-55.101c-7.199-30.899-34.798-54.199-68.098-54.799m-42.701 75.599c-.2-1.6-.3-3.3-.3-5 .4-23.1 19.401-41.6 42.5-41.2 12.6.2 23.799 5.9 31.299 14.9l-73.499 31.3zm151.3-107.6v137.3l23.801 9.9-11.301 27.1-23.6-9.8c-5.299-2.3-8.9-5.8-11.6-9.8-2.6-4-4.6-9.601-4.6-17v-137.7h27.3zm85.901 63.5c4.201-1.4 8.6-2.1 13.301-2.1 20.299 0 37.1 14.4 41 33.5l28.699-5.9c-6.6-32.5-35.299-56.9-69.699-56.9-7.9 0-15.5 1.3-22.5 3.6l9.199 27.8zm-33.901 92.9 19.4-21.9c-8.699-7.7-14.1-18.9-14.1-31.4s5.5-23.7 14.1-31.3l-19.4-21.9c-14.699 13-24 32.1-24 53.3s9.301 40.2 24 53.2zm88.202-44.801c-3.9 19.101-20.801 33.5-41 33.5-4.6 0-9.1-.8-13.301-2.199l-9.299 27.8a70.47 70.47 0 0 0 22.6 3.7c34.4 0 63.1-24.4 69.699-56.9l-28.699-5.901z'/>
                                    </svg>
                                </li>
                                <li>
                                    <svg viewBox='0 -139.5 750 750' xmlns='http://www.w3.org/2000/svg'>
                                        <g fill='none'>
                                            <path d='M697.115 0H52.885C23.724 0 0 23.196 0 51.707v367.586C0 447.804 23.724 471 52.885 471h644.23C726.274 471 750 447.804 750 419.293V51.707C750 23.196 726.274 0 697.115 0Z' fill='#FFF'/>
                                            <path d='M321.004 378.44 47 378.54v-.66c0-.363.437-2.714.97-5.226.535-2.511 1.365-6.507 1.847-8.877.48-2.372 1.303-6.4 1.826-8.955a3823.979 3823.979 0 0 0 3.815-18.735c.494-2.463 1.317-6.493 1.831-8.955a2558.2 2558.2 0 0 0 1.948-9.45c.557-2.736 1.403-6.915 1.881-9.287a794.28 794.28 0 0 1 1.688-8.123 271.84 271.84 0 0 0 1.275-6.302c.251-1.368 1.065-5.397 1.808-8.954a730.47 730.47 0 0 0 1.822-8.953c.26-1.369 1.082-5.398 1.83-8.955.747-3.555 1.568-7.585 1.824-8.953.256-1.368 1.081-5.398 1.833-8.954.754-3.557 1.566-7.511 1.805-8.788.241-1.277.9-4.56 1.464-7.295.563-2.736 1.63-7.885 2.37-11.441.741-3.558 2.007-9.75 2.813-13.764.809-4.012 1.773-8.787 2.145-10.61a4107.793 4107.793 0 0 1 3.31-16.084c.549-2.646 1.441-6.973 1.983-9.618a3528.87 3528.87 0 0 0 1.858-9.12c.48-2.37 1.297-6.325 1.817-8.787.52-2.463 1.416-6.79 1.99-9.618a306.964 306.964 0 0 1 2.135-9.617c.6-2.462 1.45-5.447 1.887-6.632.437-1.186 1.645-3.755 2.684-5.711l1.888-3.555 1.717-2.249c.943-1.235 2.629-3.19 3.745-4.34 1.116-1.152 2.997-2.885 4.184-3.85 1.185-.967 2.902-2.272 3.813-2.899.912-.627 2.703-1.726 3.98-2.441 1.276-.716 3.069-1.652 3.98-2.081.912-.43 2.778-1.215 4.145-1.743 1.368-.528 3.98-1.415 5.803-1.968 1.824-.555 5.248-1.39 7.609-1.857 2.361-.466 6.09-1.09 8.29-1.385l3.999-.538 274.17-.103L702.95 93v.66c0 .362-.44 2.714-.976 5.225-.539 2.511-1.437 6.805-1.997 9.54-.561 2.736-1.378 6.692-1.818 8.789-.439 2.098-1.27 6.127-1.848 8.953-.577 2.828-1.465 7.156-1.973 9.618-.508 2.462-1.331 6.492-1.829 8.953-.497 2.463-1.325 6.492-1.838 8.955-.516 2.462-1.312 6.343-1.772 8.622-.461 2.28-1.294 6.383-1.852 9.12a1955.06 1955.06 0 0 1-1.992 9.616c-.538 2.554-1.356 6.509-1.819 8.789l-1.853 9.119a1673.21 1673.21 0 0 1-1.988 9.618c-.537 2.553-1.338 6.433-1.78 8.622a8069.947 8069.947 0 0 1-3.704 18.24c-.45 2.187-1.25 6.068-1.78 8.62-.531 2.554-1.439 6.957-2.015 9.784-.58 2.827-1.407 6.855-1.84 8.954-.434 2.096-1.244 6.052-1.802 8.787-.557 2.737-1.445 7.064-1.973 9.618-.527 2.553-1.353 6.583-1.837 8.954-.482 2.37-1.322 6.475-1.864 9.12-.545 2.643-1.432 6.971-1.973 9.615-.542 2.646-1.352 6.6-1.803 8.79a4228.93 4228.93 0 0 0-1.828 8.953 911.017 911.017 0 0 1-2.01 9.581l-.998 4.606-1.19 3.187c-.653 1.752-1.637 4.082-2.186 5.177-.547 1.093-1.663 3.025-2.479 4.29-.817 1.266-1.955 2.887-2.528 3.603-.574.716-2.302 2.566-3.842 4.111l-2.795 2.807-2.692 1.912c-1.48 1.052-3.075 2.122-3.543 2.377-.468.256-2.252 1.167-3.963 2.023-1.711.858-4.13 1.948-5.372 2.423-1.243.477-3.705 1.287-5.472 1.8-1.766.516-3.66 1.023-4.206 1.127-.548.105-2.446.498-4.221.874-1.774.376-5.355.937-7.958 1.247l-4.734.564-274.003.097Zm-97.486-70.874h7.13l.2-.525c.113-.289.203-.967.203-1.507 0-.541.235-2.505.523-4.366.286-1.863.96-6.146 1.497-9.52.537-3.375 1.34-8.449 1.785-11.275.446-2.828.99-6.447 1.21-8.043.22-1.596.486-2.9.594-2.9.107 0 .568.704 1.024 1.566l.828 1.567 1.838 1.853 1.84 1.851 2.262.907 2.263.905 2.697.35 2.698.35 3.422-.21 3.423-.21 3.707-.96 3.707-.96 1.99-.906c1.094-.5 3.034-1.59 4.31-2.421l2.322-1.512 2.164-2.164c1.19-1.188 2.87-3.097 3.73-4.24.863-1.141 1.568-2.159 1.568-2.26 0-.102.424-.809.94-1.572.518-.762 1.576-2.88 2.352-4.703.778-1.824 1.99-5.107 2.698-7.295l1.285-3.98.665-3.447c.365-1.895.836-5.029 1.045-6.964l.38-3.517-.22-2.984-.22-2.985-.692-2.985-.69-2.985-1.122-2.233-1.12-2.235-2.164-2.294-2.163-2.294-2.56-1.323-2.56-1.322-2.819-.677-2.819-.674-2.819-.206-2.818-.207-3.14.36-3.14.361-2.563.655-2.562.653-2.227 1.032c-1.224.565-3.007 1.528-3.96 2.138-.953.61-1.937 1.311-2.185 1.56-.248.247-.844.707-1.322 1.018l-.871.571.608-2.913c.336-1.602.615-3.099.623-3.328l.013-.414h-12.16l-1.065 6.716c-.587 3.694-1.513 9.4-2.058 12.685a5718.93 5718.93 0 0 1-3.65 21.72c-.542 3.191-1.438 8.266-1.991 11.276-.554 3.01-1.364 7.412-1.802 9.783-.437 2.37-1.261 6.847-1.83 9.947-.567 3.103-1.481 8.026-2.03 10.945-.55 2.918-1.441 7.544-1.984 10.28-.543 2.736-1.067 5.311-1.167 5.72l-.181.747h7.13Zm30.696-38.342-2.768.167-1.81-.32-1.81-.32-1.838-.839-1.838-.84-1.284-1.226-1.284-1.225-.741-1.658a23.365 23.365 0 0 1-1.164-3.444l-.423-1.784.17-2.858.17-2.858.854-4.477c.47-2.462 1.313-7.089 1.874-10.28.561-3.192 1.413-7.87 1.89-10.394l.867-4.59 1.901-1.581c1.046-.87 2.703-2.036 3.682-2.591l1.778-1.01 2.321-.718 2.322-.72 2.985-.174 2.984-.175 2.431.518 2.43.518 1.715.79 1.715.79 1.438 1.445 1.44 1.446.774 1.531c.427.843 1.027 2.49 1.332 3.663l.556 2.131-.17 6.302-.17 6.3-.852 3.725c-.468 2.049-1.36 5.183-1.981 6.964l-1.13 3.24-1.384 2.622c-.761 1.443-1.935 3.392-2.608 4.332-.673.939-1.747 2.158-2.386 2.705a52.14 52.14 0 0 1-2.375 1.905l-1.216.908-2.814.957-2.814.957-2.769.166Zm68.862 9.117 3.648.042 3.648-.333c2.007-.183 5.29-.564 7.295-.847 2.007-.283 5.473-.916 7.703-1.405l4.053-.892.203-1.496c.111-.821.566-3.268 1.012-5.436l.81-3.945-.18-.178-.178-.178-1.24.598c-.68.329-2.805 1.115-4.717 1.745l-3.48 1.146-3.65.708-3.651.707-5.804.012-5.804.01-1.99-.635c-1.094-.349-2.703-.988-3.576-1.421l-1.586-.785-1.31-1.184-1.31-1.184-1.023-1.785-1.022-1.787-.64-2.24-.642-2.24-.003-4.147-.005-4.147.568-3.698.57-3.7 4.99-.233 4.99-.234 18.447.12 18.446.118.557-2.362c.307-1.3.775-3.986 1.041-5.97l.484-3.607.01-3.033.011-3.034-.525-2.266-.526-2.264-.869-1.5c-.476-.824-1.319-2.019-1.87-2.656-.55-.636-1.534-1.533-2.186-1.993-.652-.46-1.93-1.233-2.843-1.718l-1.658-.882-2.896-.698-2.898-.697-3.569-.341-3.57-.342-3.316.216-3.316.215-3.98.764-3.98.765-2.487.994c-1.368.546-3.457 1.544-4.642 2.217-1.186.672-2.827 1.766-3.647 2.43-.823.666-2.244 1.959-3.159 2.874-.916.916-2.272 2.56-3.011 3.654-.74 1.095-1.874 3.034-2.522 4.31-.646 1.278-1.489 3.069-1.872 3.98-.383.912-1.08 2.778-1.547 4.145-.469 1.369-1.204 3.98-1.635 5.805a109.124 109.124 0 0 0-1.313 6.67l-.528 3.357.005 4.935.005 4.934.504 2.156c.276 1.185.807 2.977 1.177 3.98.37 1.003 1.057 2.495 1.524 3.316.466.82 1.465 2.142 2.216 2.937.752.794 2.114 2 3.026 2.678.911.68 2.535 1.634 3.607 2.122l1.95.887 2.718.658c1.495.36 3.752.79 5.015.952 1.262.162 3.937.314 5.943.336Zm6.246-46.717c-9.18 0-16.692-.065-16.692-.146 0-.08.392-1.237.871-2.57.478-1.334 1.32-3.317 1.868-4.41l.999-1.985 2.193-2.182 2.193-2.183 2.157-1.03c1.185-.567 2.752-1.185 3.48-1.372.731-.187 2.82-.436 4.643-.552l3.318-.213 2.547.328 2.546.327 1.85.847 1.851.847 1.016 1.095c.558.602 1.223 1.488 1.478 1.97l.463.875.306 1.943.307 1.944-.35 3.233-.35 3.234h-16.694Zm99.213 46.718 3.65.04 4.142-.49c2.28-.27 5.313-.717 6.742-.995a76.861 76.861 0 0 0 5.14-1.22c1.398-.397 2.663-.824 2.812-.95.148-.127.542-1.633.877-3.345.335-1.712.758-4.009.938-5.103.18-1.095.274-2.048.208-2.12-.067-.072-.31.021-.543.205-.234.185-1.86.87-3.617 1.522l-3.193 1.186-4.547.88-4.548.881-3.865-.13-3.866-.133-2.197-.762-2.196-.762-1.697-1.483-1.696-1.485-1.127-2.05-1.124-2.05-.538-2.743-.535-2.743.004-3.557.002-3.558.652-4.311.652-4.312.688-2.322c.38-1.277.81-2.768.954-3.315.146-.548.753-2.115 1.352-3.483.598-1.368 1.665-3.482 2.37-4.698l1.284-2.21 1.577-1.635 1.577-1.634 1.668-1.034 1.67-1.036 2.145-.66c1.179-.364 3.264-.836 4.631-1.048l2.487-.388 3.648.183 3.648.183 4.31.864 4.312.861 1.753.654c.964.36 1.795.655 1.848.655.05 0 .282-1.231.513-2.737.232-1.504.643-3.98.914-5.5.273-1.522.43-2.833.349-2.912-.08-.08-1.376-.286-2.879-.457-1.504-.171-5.591-.475-9.082-.677l-6.35-.364-4.476.343-4.477.344-3.317.696-3.315.697-2.137.854c-1.174.47-2.894 1.318-3.823 1.884a60.66 60.66 0 0 0-2.625 1.693c-.516.365-2.08 1.788-3.479 3.163l-2.539 2.5-1.419 2.077c-.78 1.143-2.127 3.524-2.997 5.294l-1.58 3.217-1.211 3.48c-.666 1.916-1.596 5.05-2.066 6.965l-.855 3.483-.311 3.15-.31 3.15.003 4.146.004 4.145.312 2.411.313 2.412.994 2.48.992 2.481 1.149 1.793 1.146 1.793 1.824 1.796 1.825 1.795 1.93 1.021 1.93 1.02 2.535.704c1.393.387 3.408.831 4.476.987 1.068.156 3.584.302 5.593.324h-.006Zm54.55-.122 4.476-.129 2.819-.721 2.819-.722 1.824-.862c1.003-.473 2.644-1.41 3.648-2.08 1.003-.67 2.557-1.944 3.45-2.83.895-.888 2.221-2.4 2.948-3.362.727-.963 1.365-1.707 1.419-1.653.055.054-.114 1.587-.372 3.407-.257 1.822-.471 4.244-.475 5.384l-.006 2.072h12.172l.187-4.724.185-4.726.869-6.136c.478-3.374 1.25-8.374 1.715-11.109a1364.14 1364.14 0 0 1 1.797-10.28c.523-2.92 1.352-7.47 1.84-10.115l.892-4.808.03-4.153.03-4.154-.939-1.92-.94-1.92-1.272-1.222-1.275-1.223-2.09-1.059-2.091-1.06-3.116-.693-3.117-.694-4.29-.326-4.29-.326-5.527.342c-3.04.188-7.317.559-9.506.826l-3.98.482-2.712.01-2.712.01-.395 1.908c-.217 1.049-.82 3.54-1.34 5.537-.521 1.997-.898 3.678-.838 3.737.058.06 1.509-.27 3.222-.731 1.714-.462 5.355-1.22 8.092-1.686l4.974-.847 4.476-.184 4.477-.185 2.884.505 2.884.506 1.925.95 1.924.95 1.078 1.607 1.079 1.606-.015 2.532-.017 2.533-.57 2.779-.572 2.78-11.933.043-11.932.042-3.905 1.07c-2.147.59-4.526 1.372-5.285 1.738-.76.368-1.518.668-1.688.668-.168 0-1.446.707-2.839 1.575l-2.532 1.573-1.994 1.99c-1.098 1.096-2.499 2.738-3.114 3.65-.616.911-1.618 2.816-2.224 4.233l-1.103 2.576-.507 2.895-.507 2.897v6.077l.483 2.53.485 2.53.897 1.65c.494.906 1.402 2.236 2.015 2.953l1.117 1.304 1.982 1.205 1.983 1.205 2.271.642c1.25.353 3.15.781 4.224.951l1.953.308 4.477-.128h-.003Zm4.145-9.274-2.654.14-1.757-.449c-.965-.245-2.432-.794-3.259-1.219l-1.5-.772-.82-.974c-.45-.537-1.14-1.588-1.53-2.34l-.711-1.365-.139-3.187-.14-3.188.562-1.934c.309-1.063 1.035-2.91 1.612-4.101l1.05-2.168 2.011-1.996 2.01-1.996 2.135-1.028 2.134-1.028 2.653-.63 2.654-.63h16.581l.524.216.524.216-.44 2.603c-.243 1.43-.822 4.02-1.288 5.752-.464 1.734-1.285 4.28-1.823 5.66-.539 1.381-.98 2.602-.98 2.712 0 .112-.545 1.117-1.211 2.235l-1.21 2.034-1.989 1.971c-1.093 1.083-2.11 1.97-2.257 1.97-.146 0-.816.373-1.488.83l-1.223.827-2.69.851-2.689.85-2.652.138Zm107.943 9.392 3.15.04 2.985-.485c1.642-.266 3.73-.695 4.643-.953.911-.259 2.554-.928 3.647-1.488l1.99-1.02 1.713-1.507 1.71-1.507 1.804-2.403c.992-1.323 1.889-2.628 1.995-2.902l.192-.499-.167 1.66a54.148 54.148 0 0 1-.46 3.316c-.16.912-.389 2.665-.51 3.897l-.22 2.237h13.012v-4.476l.99-8.457c.546-4.651 1.352-10.843 1.792-13.762.44-2.92 1.12-7.096 1.51-9.285.39-2.19 1.081-6.144 1.534-8.788.456-2.644 1.276-7.272 1.825-10.28.548-3.01 1.427-7.785 1.952-10.612l1.812-9.784c.471-2.553 1.317-7.03 1.878-9.948a704.51 704.51 0 0 1 1.823-9.12c.441-2.097.802-3.926.801-4.062v-.25h-14.195l-.21 2.074c-.114 1.14-.658 4.907-1.206 8.374-.549 3.464-1.444 8.986-1.99 12.269a2448.38 2448.38 0 0 0-1.165 7.075l-.178 1.106-.56-.238c-.307-.131-1.978-.595-3.71-1.03l-3.15-.791-4.31-.336-4.312-.335-3.648.339-3.647.34-3.317.84-3.316.837-3.15 1.537-3.152 1.536-2.32 1.718-2.322 1.718-2.005 2.15c-1.103 1.183-2.695 3.138-3.54 4.346l-1.534 2.196-1.804 3.75c-.99 2.064-2.197 4.796-2.68 6.072-.484 1.278-1.335 4.108-1.894 6.29l-1.015 3.968-.5 5.153-.5 5.15.375 4.146.376 4.145.443 1.492c.246.821.76 2.283 1.145 3.25l.7 1.758 1.276 1.727 1.278 1.729 1.457 1.193 1.458 1.195 1.99.988c1.095.543 2.93 1.245 4.08 1.56a36.95 36.95 0 0 0 4.145.84c1.13.147 3.472.286 5.206.307Zm5.654-9.407-2.504.13-1.69-.303c-.929-.167-2.416-.616-3.305-.997l-1.615-.691-1.36-1.115-1.359-1.113-1.01-1.935-1.01-1.934-.461-2.156-.46-2.156.04-4.31.038-4.312.535-3.814.534-3.813.831-2.653c.457-1.459.834-2.836.836-3.06.004-.223.453-1.416 1.003-2.652a89.832 89.832 0 0 1 2.037-4.237c.572-1.095 1.64-2.8 2.374-3.79.736-.991 2.045-2.484 2.91-3.318.864-.832 2.238-1.926 3.056-2.428l1.484-.913 2.607-.903 2.607-.902 5.472-.003h5.472l3.15.875c1.733.48 3.573 1.037 4.089 1.238l.938.364-.183.91c-.1.502-.495 2.702-.876 4.89-.38 2.19-1.132 6.368-1.668 9.287a1640.79 1640.79 0 0 1-1.833 9.782c-.47 2.463-1.152 5.596-1.515 6.964a457.836 457.836 0 0 1-1.138 4.21c-.263.948-.889 2.59-1.39 3.648-.503 1.059-1.382 2.597-1.953 3.417-.572.82-1.538 1.959-2.148 2.527-.611.57-1.93 1.58-2.934 2.246l-1.824 1.212-2.636.837-2.637.837-2.504.134Zm-488.066 7.793h8.056l.579-3.564c.317-1.96.939-5.73 1.38-8.374l1.823-10.943c.563-3.375 1.406-8.374 1.874-11.11.467-2.735 1.211-6.979 1.651-9.43.441-2.453.886-4.541.987-4.644l.187-.185h43.331l.241.24.241.24-.377 1.915c-.205 1.054-.816 4.303-1.357 7.221-.54 2.919-1.448 7.843-2.02 10.945a1480.8 1480.8 0 0 1-1.83 9.782 1289.35 1289.35 0 0 0-1.968 10.612c-.643 3.556-1.17 6.653-1.167 6.881l.004.414h16.18l.358-2.072c.198-1.14.514-3.192.705-4.56.19-1.368.65-4.279 1.02-6.467.37-2.187 1.109-6.517 1.643-9.617.534-3.1 1.429-8.398 1.987-11.772.559-3.375 1.387-8.299 1.842-10.943a711.931 711.931 0 0 1 1.798-9.95 2821.88 2821.88 0 0 0 1.98-10.612c.555-3.008 1.384-7.56 1.845-10.114.461-2.553 1.3-7.18 1.867-10.28.566-3.1 1.28-6.719 1.587-8.042l.559-2.404h-16.384l-.223 1.576c-.121.865-.517 3.291-.879 5.388a1576.67 1576.67 0 0 1-1.46 8.29 996.996 996.996 0 0 0-1.794 10.447 784.292 784.292 0 0 0-1.543 9.658l-.553 3.688-12.025.244-12.026.243-10.072-.24c-5.54-.13-10.103-.265-10.141-.296-.037-.032.151-1.32.419-2.864a262.12 262.12 0 0 1 1.127-5.956c.352-1.733 1.02-5.165 1.482-7.629.464-2.461.988-5.52 1.167-6.797a84.57 84.57 0 0 1 .83-4.727c.278-1.321.806-4.107 1.174-6.189.366-2.081.757-4.022.869-4.31l.2-.526h-16.25l-.52 2.902a231.194 231.194 0 0 0-.848 5.057c-.18 1.185-.786 4.99-1.345 8.456-.56 3.465-1.386 8.614-1.836 11.44-.45 2.828-1.27 7.977-1.82 11.442a700.908 700.908 0 0 1-2.023 11.938c-.56 3.102-1.373 7.503-1.805 9.783-.431 2.28-1.253 6.608-1.826 9.617a840.991 840.991 0 0 1-1.86 9.452c-.45 2.188-.946 4.725-1.103 5.636a288.21 288.21 0 0 1-1.142 5.846c-.47 2.303-.854 4.429-.854 4.726v.538h8.059Zm89.199 0h7.133l.2-.524c.112-.29.202-1.046.202-1.68 0-.638.45-3.946.997-7.353a2950.858 2950.858 0 0 1 3.848-23.273c.45-2.644 1.25-7.046 1.777-9.784a2436.17 2436.17 0 0 0 1.802-9.45 1195.97 1195.97 0 0 1 2.022-10.41c.649-3.264 1.26-6.064 1.36-6.224l.18-.292-7.213.09-7.213.088-.603 4.312a535.526 535.526 0 0 1-1.604 10.445c-.552 3.375-1.388 8.525-1.857 11.441a493.02 493.02 0 0 1-1.817 10.447l-1.808 9.617c-.462 2.463-1.293 6.79-1.846 9.617a1286.42 1286.42 0 0 1-1.648 8.29c-.355 1.734-.734 3.487-.845 3.898l-.2.745h7.133Zm166.83 0h7.081l.212-2.996c.118-1.646.518-4.967.89-7.378.374-2.41 1.138-7.218 1.697-10.683.56-3.466 1.6-9.234 2.312-12.82.714-3.583 1.518-7.147 1.79-7.916.272-.771.494-1.605.494-1.855s.533-1.612 1.183-3.026c.65-1.414 1.863-3.58 2.695-4.812l1.511-2.242 2.023-1.874 2.023-1.872 2.495-1.192 2.495-1.192 3.815.02 3.812.02 1.876.56c1.03.308 1.963.56 2.072.56.109 0 .198-.351.198-.783 0-.43.373-2.614.829-4.854.455-2.238.829-4.164.829-4.28 0-.116-1.082-.54-2.404-.94-1.323-.402-3.15-.823-4.062-.937l-1.658-.205-2.156.382c-1.186.21-2.948.672-3.917 1.029-.97.356-2.57 1.163-3.556 1.794-.986.632-2.52 1.862-3.41 2.733-.89.872-2.385 2.63-3.323 3.907-.94 1.277-1.92 2.62-2.181 2.985l-.475.662.288-1.325c.159-.73.6-3.118.981-5.306.38-2.19.774-4.242.87-4.56l.176-.581H373.65v.8c0 .44-.374 3.087-.83 5.885-.456 2.799-1.208 7.475-1.671 10.394a2330.97 2330.97 0 0 1-1.826 11.275 572.387 572.387 0 0 1-1.828 10.445 2317.56 2317.56 0 0 1-3.83 19.898c-.558 2.828-1.227 6.166-1.484 7.42-.259 1.253-.47 2.41-.47 2.569v.291h7.08Zm168.074 0h7.239v-4.431l.834-5.495c.46-3.02 1.216-7.808 1.683-10.633a1372.56 1372.56 0 0 0 1.29-7.96c.246-1.55.892-4.908 1.438-7.461.548-2.554 1.23-5.314 1.518-6.136.288-.82.525-1.682.528-1.913.003-.232.62-1.721 1.37-3.31l1.367-2.892 1.804-2.395 1.802-2.394 1.973-1.484c1.085-.816 2.83-1.898 3.878-2.406l1.905-.922 4.144.028 4.146.03 1.632.523 1.631.524.276-.17.274-.17.016-1.058c.006-.582.361-2.747.788-4.813l.775-3.754-.872-.342a51.307 51.307 0 0 0-2.53-.862l-1.658-.523-2.984.008-2.985.007-2.432.857-2.433.855-1.827 1.101-1.825 1.102-2.375 2.487-2.375 2.487-1.276 1.93c-.7 1.06-1.318 1.881-1.372 1.823-.053-.057.328-2.27.847-4.913.52-2.645.952-5.145.96-5.555l.014-.747h-12.27v.212c0 .116-.306 2.242-.68 4.725a1358.83 1358.83 0 0 1-1.668 10.65 2864.67 2864.67 0 0 1-1.982 12.104 646.012 646.012 0 0 1-1.831 10.447c-.46 2.461-1.278 6.79-1.817 9.616-.54 2.828-1.425 7.38-1.968 10.115-.543 2.735-1.264 6.355-1.6 8.042l-.612 3.066h7.24Zm-320.878-80.922 2.012.007 1.601-.545 1.602-.545 1.416-1.438 1.417-1.436.745-1.915.747-1.915.026-2.819.027-2.817-.663-1.102-.664-1.1-1.154-.715-1.155-.715h-4.986l-1.697.76-1.698.76-.985 1.055-.985 1.057-.774 1.823-.774 1.824-.146 2.841-.146 2.841.72 1.413.72 1.411 1.391.631 1.39.63 2.013.009Z' fill='#B3131B'/>
                                        </g>
                                    </svg>
                                </li>
                                <li>
                                    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
                                        <path fill='#00bdae' d='M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z'/>
                                        <path fill='#00bdae' d='m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z'/>
                                    </svg>
                                </li>
                            </ul>
                            <div className='dev'>
                                <a target='_blank' href='https://drypzz.netlify.app/'>Developed by @drypzz</a>
                            </div>
                        </div>

                        <div className='custom__footer__content--box'>
                            <h2 className='custom__footer__box--title'><span>Menu Rápido</span></h2>
                            <ul className='custom__footer__box--list'>
                                <li><a href='/'>{'•'} Inicio</a></li>
                                <li><a href='/equipaments'>{'•'} Equipamentos</a></li>
                                <li><a href='/games'>{'•'} Modos de Jogo</a></li>
                                <li><a href='/midia'>{'•'} Fotos</a></li>
                                <li><a href='/values'>{'•'} Valores</a></li>
                                <li><a href='/contact'>{'•'} Contato</a></li>
                            </ul>
                        </div>

                        <div className='custom__footer__content--box'>
                            <div className='custom__footer__box--icons'>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href='https://www.facebook.com/gunsairsoftarena/'><FaFacebook/></a>
                                </div>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href='https://www.instagram.com/gunsairsoftarena/'><FaInstagram/></a>
                                </div>
                                <div className='custom__footer__box--icons--conent'>
                                    <a target='_blank' href='https://api.whatsapp.com/send?phone=554797519814'><FaWhatsapp/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-content'>
                        <p>© 2021 - {new Date().getFullYear()} | Todos os direitos reservados</p>
                    </div>
                    <div className='footer-content'>
                        <p>CNPJ: {CONFIGS.gerais['cnpj']}</p>
                    </div>
                    <div className='footer-content'>
                        <img src={'/files/transparent.png'} />
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;