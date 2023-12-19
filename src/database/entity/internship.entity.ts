import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InternShipProgram {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  contactNumber: string;

  @Column({ nullable: true })
  currentInstitutionUniversity: string;

  @Column({ nullable: true })
  EductionDegreeAndMajor: string;

  @Column({ nullable: true })
  ExpectedGradationYear: string;

  @Column({ nullable: true })
  experience: boolean;

  @Column({ nullable: true })
  programming_languages: string;
  @Column({ nullable: true })
  scope: string;

  @Column()
  hourOfWeek: string;

  @Column()
  timeSlot: string;

  @Column({ nullable: true })
  intrusted: string;

  @Column({ nullable: true })
  skills: string;

  @Column({ nullable: true })
  project: string;

  @Column({ nullable: true })
  aboutYou: string;
}
