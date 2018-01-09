import DAO from '../dao/DAO';

export default interface Business {
    readonly dao : DAO;
    toObject() : object;
}