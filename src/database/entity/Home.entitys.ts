import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

// home
@Entity()
export class Home {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

@Entity()
export class Home_Hero_section {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  main_text: string;

  @Column()
  sub_text: string;

  @Column()
  upper_sub_text: string;

  @Column()
  image: string;

  @Column()
  button_text: string;

  @Column()
  button_url: string;

  @OneToMany(
    () => Home_programming_language_slider,
    (slider) => slider.HeroSection
  )
  @JoinColumn()
  Language_Slides: Home_programming_language_slider[];
}
@Entity()
export class Home_programming_language_slider {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  icon: string;
  @Column()
  name: string;

  @ManyToOne(
    () => Home_Hero_section,
    (heroSection) => heroSection.Language_Slides
  )
  @JoinColumn()
  HeroSection: Home_Hero_section;
}

@Entity()
export class Home_services_section {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  heading_text: string;
  @OneToMany(
    () => Home_Services_section_box,
    (box) => box.Home_services_section
  )
  boxes: Home_Services_section_box[];
}

@Entity()
export class Home_Services_section_box {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  heading: string;

  @Column()
  text: string;

  @ManyToOne(() => Home_services_section, (section) => section.boxes)
  Home_services_section: Home_services_section;
}

@Entity()
export class Home_project_section {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Home_project, (proj) => proj.HomeProjectSection)
  projects: Home_project[];
}

@Entity()
export class Home_project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Home_project_section, (Home) => Home.projects)
  HomeProjectSection: Home_project_section;
}

@Entity()
export class Home_why_web_stack_section {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
@Entity()
export class Home_Client_review_section {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
