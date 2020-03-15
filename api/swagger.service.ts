/**
 * ESI Meta Spec
 * ESI specs and miscellaneous routes
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SwaggerService {

    protected basePath = 'https://esi.evetech.net';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get _dev spec (versioned)
     * The _dev ESI swagger specification. The underscore swagger specs do not have a basePath, giving you an easy way to generate stable clients on versioned routes.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDevSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getDevSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getDevSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getDevSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/_dev/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get dev swagger spec
     * The dev ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDevSwagger_1(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getDevSwagger_1(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getDevSwagger_1(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getDevSwagger_1(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/dev/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get _latest spec (versioned)
     * The _latest ESI swagger specification. The underscore swagger specs do not have a basePath, giving you an easy way to generate stable clients on versioned routes.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLatestSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getLatestSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getLatestSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getLatestSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/_latest/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get latest swagger spec
     * The latest ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLatestSwagger_2(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getLatestSwagger_2(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getLatestSwagger_2(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getLatestSwagger_2(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/latest/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get _legacy spec (versioned)
     * The _legacy ESI swagger specification. The underscore swagger specs do not have a basePath, giving you an easy way to generate stable clients on versioned routes.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLegacySwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getLegacySwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getLegacySwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getLegacySwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/_legacy/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get legacy swagger spec
     * The legacy ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLegacySwagger_3(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getLegacySwagger_3(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getLegacySwagger_3(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getLegacySwagger_3(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/legacy/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get meta swagger spec
     * The meta ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMetaSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getMetaSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getMetaSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getMetaSwagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get v1 swagger spec
     * The v1 ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getV1Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getV1Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getV1Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getV1Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/v1/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get v2 swagger spec
     * The v2 ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getV2Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getV2Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getV2Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getV2Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/v2/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get v3 swagger spec
     * The v3 ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getV3Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getV3Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getV3Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getV3Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/v3/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get v4 swagger spec
     * The v4 ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getV4Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getV4Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getV4Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getV4Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/v4/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get v5 swagger spec
     * The v5 ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getV5Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getV5Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getV5Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getV5Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/v5/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get v6 swagger spec
     * The v6 ESI swagger specification.
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getV6Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getV6Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getV6Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getV6Swagger(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/v6/swagger.json`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}