import Cloudinary from "cloudinary";
import Formidable from "formidable";
import dotenv from "dotenv";
import { membersModel } from "../Models/members";
import { clanModel } from "../Models/ClanModel";
const cloudinary = Cloudinary.v2;
dotenv.config();
//=====================================================Cloudinary Configs===============================================
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

class NewMembersController {
  AddNewMember(request, response) {
    try {
      const form = new Formidable.IncomingForm();
      form.parse(request, async (error, fields, files) => {
        if (error) {
          console.error(error);
          return response
            .status(500)
            .json({ msg: "Network error failed to add new person" });
        }

        const { firstName, lastName, familyName } = fields;
        const { image } = files;

        if (!image) {
          const newMember = new membersModel({
            familyName,
            firstName,
            lastName,
          });

          const savedMember = await newMember.save();

          let isClanNameExisting = await clanModel.findOne({
            clanName: familyName,
          });

          if (!isClanNameExisting) {
            const newClan = new clanModel({
              familyName,
              clan_members: [savedMember._id],
            });

            const savedClan = await newClan.save();
          } else {
            isClanNameExisting.clan_members = [
              ...isClanNameExisting,
              savedMember._id,
            ];

            const updatedDoc = await clanModel.findOneAndUpdate(
              { clanName: familyName },
              isClanNameExisting,
              { new: true }
            );
            return response.status(201).json({
              msg:
                "New user has been added, add more information for this person",
            });
          }
        } else {
          cloudinary.uploader.upload(
            image.path,
            { folder: `/Clan-Members-Pic/${familyName}` },
            async (error, results) => {
              if (error) {
                console.error(error);
                return response
                  .status(500)
                  .json({ msg: "Failed to add user's image " });
              }

              const img_url = results.secure_url;

              const newMember = new membersModel({
                familyName,
                firstName,
                lastName,
                image: img_url,
              });

              const savedMember = await newMember.save();

              let isClanNameExisting = await clanModel.findOne({
                clanName: familyName,
              });

              if (!isClanNameExisting) {
                const newClan = new clanModel({
                  familyName,
                  clan_members: [savedMember._id],
                });

                const savedClan = await newClan.save();
              } else {
                isClanNameExisting.clan_members = [
                  ...isClanNameExisting,
                  savedMember._id,
                ];

                const updatedDoc = await clanModel.findOneAndUpdate(
                  { clanName: familyName },
                  isClanNameExisting,
                  { new: true }
                );
                return response.status(201).json({
                  msg:
                    "New user has been added, add more information for this person",
                });
              }
            }
          );
        }
      });
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
}
