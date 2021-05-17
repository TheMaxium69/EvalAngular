export class Incident {


  constructor(private $id: number, private $titre: string, private $email: string, private $description: string,
              private $level: string, private $type: string, private $progress: number,
              private $dateCreation: string, private $dateModification: string,
              private $open = true) {
  }

  get id(): number {
    return this.$id;
  }

  set id(value) {
    this.$id = value;
  }

  get titre(): string {
    return this.$titre;
  }

  set titre(value: string) {
    this.$titre = value;
  }

  get email(): string {
    return this.$email;
  }

  set email(value: string) {
    this.$email = value;
  }

  get description(): string {
    return this.$description;
  }

  set description(value: string) {
    this.$description = value;
  }

  get level(): string {
    return this.$level;
  }

  set level(value: string) {
    this.$level = value;
  }

  get type(): string {
    return this.$type;
  }

  set type(value: string) {
    this.$type = value;
  }

  get progress(): number {
    return this.$progress;
  }

  set progress(value: number) {
    this.$progress = value;
  }

  get dateCreation(): string {
    return this.$dateCreation;
  }

  set dateCreation(value: string) {
    this.$dateCreation = value;
  }

  get dateModification(): string {
    return this.$dateModification;
  }

  set dateModification(value: string) {
    this.$dateModification = value;
  }

  get open(): boolean {
    return this.$open;
  }

  set open(value: boolean) {
    this.$open = value;
  }



}



