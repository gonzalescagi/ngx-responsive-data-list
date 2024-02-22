export type EstiloLine = 'clasic' | 'modern' | 'future' | 'list' | 'city';
export class ConfigMiresponse {
  type: EstiloLine='clasic';

  constructor(type:EstiloLine){
      type = type;
  }

}