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

import { GetVerifyOk } from '../model/getVerifyOk';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MetaService {

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
     * Debug request headers
     * Echo the request headers for debugging purposes. Note that the &#39;Connection&#39; header and any &#39;X-&#39; headers are not included
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHeaders(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getHeaders(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getHeaders(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getHeaders(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

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

        return this.httpClient.get<{ [key: string]: string; }>(`${this.basePath}/headers/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ping route
     * Ping the ESI routers
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPing(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getPing(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getPing(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getPing(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain; charset=utf-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/ping`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ESI health status
     * Provides a general health indicator per route and method
     * @param version The version of metrics to request. Note that alternate versions are grouped together
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStatus(version?: 'latest' | 'dev' | 'legacy' | 'meta', observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public getStatus(version?: 'latest' | 'dev' | 'legacy' | 'meta', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public getStatus(version?: 'latest' | 'dev' | 'legacy' | 'meta', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public getStatus(version?: 'latest' | 'dev' | 'legacy' | 'meta', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (version !== undefined && version !== null) {
            queryParameters = queryParameters.set('version', <any>version);
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.get<Array<any>>(`${this.basePath}/status.json`,
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
     * Verify access token
     * Verify authorization tokens in ESI&#39;s auth cache
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param Authorization Access token, in the format of \&quot;Bearer &lt;access token&gt;\&quot;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getVerify(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', token?: string, Authorization?: string, observe?: 'body', reportProgress?: boolean): Observable<GetVerifyOk>;
    public getVerify(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', token?: string, Authorization?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetVerifyOk>>;
    public getVerify(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', token?: string, Authorization?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetVerifyOk>>;
    public getVerify(user_agent?: string, X_User_Agent?: string, datasource?: 'tranquility' | 'singularity', token?: string, Authorization?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
        }
        if (datasource !== undefined && datasource !== null) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined && token !== null) {
            queryParameters = queryParameters.set('token', <any>token);
        }

        let headers = this.defaultHeaders;
        if (X_User_Agent !== undefined && X_User_Agent !== null) {
            headers = headers.set('X-User-Agent', String(X_User_Agent));
        }
        if (Authorization !== undefined && Authorization !== null) {
            headers = headers.set('Authorization', String(Authorization));
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

        return this.httpClient.get<GetVerifyOk>(`${this.basePath}/verify/`,
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
     * List versions
     * List all endpoint versions
     * @param user_agent Client identifier, takes precedence over headers
     * @param X_User_Agent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getVersions(user_agent?: string, X_User_Agent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getVersions(user_agent?: string, X_User_Agent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getVersions(user_agent?: string, X_User_Agent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getVersions(user_agent?: string, X_User_Agent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (user_agent !== undefined && user_agent !== null) {
            queryParameters = queryParameters.set('user_agent', <any>user_agent);
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

        return this.httpClient.get<Array<string>>(`${this.basePath}/versions/`,
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