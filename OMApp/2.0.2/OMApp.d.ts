// Type definitions for OMApp 2.0.2

interface OMAppPage_Static {
	mall:      OMAppPage_Instance;
	task:      OMAppPage_Instance;
	news:      OMAppPage_Instance;
	video:     OMAppPage_Instance;
    web:       OMAppPage_Instance;
}
interface OMAppPage_Instance { }
declare var OMAppPage: OMAppPage_Static;

interface OMAppUserType_Static {
	visitor: 	OMAppUserType_Instance;
	google: 	OMAppUserType_Instance;
	facebook: 	OMAppUserType_Instance;
	twitter: 	OMAppUserType_Instance;
}
interface OMAppUserType_Instance { }
declare var OMAppUserType: OMAppUserType_Static;


interface OMAppTheme_Static {
	day: 	OMAppTheme_Instance;
	night: 	OMAppTheme_Instance;
}
interface OMAppTheme_Instance { }
declare var OMAppTheme: OMAppTheme_Static;


interface OMAppNetworkingType_Static {
	none: 		OMAppNetworkingType_Instance;
	WiFi: 		OMAppNetworkingType_Instance;
	WWan2G: 	OMAppNetworkingType_Instance;
	WWan3G: 	OMAppNetworkingType_Instance;
	WWan4G: 	OMAppNetworkingType_Instance;
	other: 	    OMAppNetworkingType_Instance;
}
interface OMAppNetworkingType_Instance { }
declare var OMAppNetworkType: OMAppNetworkingType_Static;

interface OMAppNavigationBar {
    isHidden: boolean;
    title: string;
    titleColor: string;
    backgroundColor: string;
}

interface OMAppNavigation {
    push(url: string, animated?: boolean): void;
    pop(animated?: boolean): void;
    popTo(index: number, animated?: boolean): void;
    bar: OMAppNavigationBar;
}

interface OMAppAnalytics {
    track(event: string, parameters?: Object): void;
}

interface OMAppUser {
    isOnline: boolean;
    id: string;
    name: string;
    type: OMAppUserType_Instance;
    coin: string;
}

interface OMAppHTTPRequest {
    url: string;
    method: string;
    data?: Object;
    headers?: Object;
}

interface OMAppHTTPResponse {
    code: number;
    message: string;
    contentType: string;
    data?: Object;
}

interface OMAppAlertMessage {
    title: string;
    body: string;
    actions: Array;
}

interface OMAppNetworking {
    isReachable: boolean;
    isViaWiFi: boolean;
    type: OMAppNetworkingType_Instance;
}

interface OMAppDebugConfiguration {
    currentTheme?: OMAppTheme_Instance;
    currentUser?: Object;
    network?: Object;
    http?: Object;
    navigation?: Object;
}


interface OMApp {

    ready(callback: () => void): void;

    login(callback: (success: boolean) => void): void;

    open(page: OMAppPage_Instance, parameters?: Object): void;

    navigation: OMAppNavigation;

    currentTheme: OMAppTheme_Instance;

    analytics: OMAppAnalytics;

    currentUser: OMAppUser;

	http(request: OMAppHTTPRequest, callback: (response: OMAppHTTPResponse) => void): void;

    alert(message: OMAppAlertMessage, callback: (index: number) => void): void;

    networking: OMAppNetworking;

    debug(configuration?: OMAppDebugConfiguration): void;
}
declare var omApp: OMApp;


